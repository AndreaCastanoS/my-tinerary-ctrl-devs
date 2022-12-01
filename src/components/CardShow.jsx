import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentAction";
import CommentsCard from "./CommentsCard";
import Swal from "sweetalert2";

export default function CardShow(props) {
  const { idUser, token } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  let { name, price, description, photo, date, idShow } = props;

  const dispatch = useDispatch();
  let [reload, setReload] = useState (false)
  const { comments } = useSelector((state) => state.comment);
  const { getComment, createComment, deleteComment } = commentsAction;

  useEffect(() => {
    dispatch(getComment({ id: idShow }));

    // eslint-disable-next-line
  }, [open, reload]);

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  let information = useRef();
  let comment = useRef();

  async function newComment(event) {
    event.preventDefault();
    let newComment = {
      userId: idUser,
      showId: idShow,
      comment: comment.current.value,
      date: "02-12-2022",
    };
   

    Swal.fire({
      icon: "question",
      title: " Do you want to post a comment?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
          let data = {
           headers: token, 
           data: newComment,
        }; 
        try {
          await dispatch(createComment(data));  
          setReload(!reload)
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "warning",
            confirmButtonColor: "#01344f",
            iconColor: "#01344f",
            title: error.response.data.message.join("<br/>"),
            showConfirmButton: true,
          });
        }
      }
    });
  }

  return (
    <>
      <div className="card2">
        <div className="card-header">
          <img src={photo} alt="hotel" />
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <h5>{description}</h5>
          <h5>USD ${price}</h5>
          <h5>
            Date:
            {date}
          </h5>
        </div>

        <form class=" textarea" onSubmit={newComment} ref={information}>
          <div className="sub">
            <input
              placeholder="Leave your comment"
              type="text "
              class=" textarea1"
              name="comment"
              ref={comment}
            />
            <div>
              <div class="flex g-25">
                <input
                  class="btn btn-primary btn-sm shadow-none"
                  type="submit"
                  value="Post comment"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="btn-view">
          <h4 onClick={handleOpen}>
            {open ? "Close " : ""}
            View Comments
          </h4>
        </div>
        {open ? (
          <div className="input-comment">
            {comments.map((item) => {
              function deleteFunc() {
                Swal.fire({
                  icon: "question",
                  title: " Do you want delete a comment?",
                  showConfirmButton: true,
                  iconColor: "#01344f",
                  confirmButtonColor: "#01344f",
                  confirmButtonText: "Yes",
                  showCancelButton: true,
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    dispatch(deleteComment({ idComment: item._id, token }));
                  }
                });
              }
              return (
                <CommentsCard
                  userId={item.userId?._id}
                  logged={item.userId?.logged}
                  idComment={item._id}
                  photo={item.userId?.photo}
                  name={item.userId?.name}
                  comment={item.comment}
                  date={item.date}
                  onClick={() => deleteFunc(item._id)}
                ></CommentsCard>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
