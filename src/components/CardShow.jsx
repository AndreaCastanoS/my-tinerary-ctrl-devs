import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentAction";
import CommentsCard from "./CommentsCard";
import axios from "axios";
import apiUrl from "../url";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./Comments";
import Reaction from "../components/Reaction";

export default function CardShow(props) {
  const { idUser, token } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  let { name, price, description, photo, date, idShow } = props;

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const { getComment, createComment, deleteComment } = commentsAction;

  useEffect(() => {
    dispatch(getComment({ id: idShow }));

    // eslint-disable-next-line
  }, [open]);

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
      date: "02-02-2023",
    };
    console.log(newComment);

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
        /*  let data = {
           headers: token, 
           data: newComment,
        }; */
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        try {
          let res = await axios.post(
            `${apiUrl}api/comments`,
            newComment,
            headers
          );
          /*  await dispatch(createComment(data));  */
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
        <div className="flex justify-end w-100 g-25 p-0-5">
          <Reaction eventId={idShow} type="showId" />
        </div>
        <form class=" textarea" onSubmit={newComment} ref={information}>
          <div className="sub">
            <input
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
          <div>
            {comments.map((item) => {
              function deleteFunc() {
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
                    dispatch(deleteComment({ idComment: item._id, token }));
                  }
                });
              }
              return (
                <CommentsCard
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
