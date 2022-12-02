import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentAction";
import Swal from "sweetalert2";

export default function CommentsCard(props) {
  const [open2, setOpen2] = useState(false);
 const [classLogged, setClassLogged] = useState(""); 
  const { idUser, token } = useSelector((state) => state.user);
  let { logged, eventId } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  let [reload, setReload] = useState(true);
  const { getComment, createComment, deleteComment, editComment } =
    commentsAction;
  let [comments, setComments] = useState([]);

  const handleOpen2 = () => {
    open2 ? setOpen2(false) : setOpen2(true);
  };

  useEffect(() => {
    getMyComments();
    logged
      ? setClassLogged("containerCard-logged")
      : setClassLogged("containerCard"); 
  }, [reload]);

  async function getMyComments() {
    let res = await dispatch(getComment({ id: eventId }));
    setComments(res.payload.comments);
    console.log(comments);
  }

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  let information = useRef();
  let comment = useRef();

  async function newComment(event) {
    event.preventDefault();
    let newComment = {
      userId: idUser,
      showId: eventId,
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
          setReload(!reload);
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

  async function editComments(event) {
    console.log(event.target.name);
    event.preventDefault();
    let edit = {
      userId: idUser,
      showId: eventId,
      comment: comment.current.value,
      date: "02-02-2023",
    };

    console.log(editComments);

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
          id: event.target.name,
          token: token,
          edit: edit,
        };
        try {
          await dispatch(editComment(data));
          setReload(!reload);
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
    <div>
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
                class="btn-Comment"
                type="submit"
                value="Post"
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
          {comments?.map((item) => {
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
                  await dispatch(deleteComment({ idComment: item._id, token }));
                }
                setReload(!reload);
              });
            }
            return (
              <div className={
                item?.userId?.logged === true ? ("containerCard-logged")
                    : ("containerCard3")}>
                <div className="p-2-5 containerCard2">
                  <div>
                    <div className="flex g-25 img-name align-center">
                      <div>
                        <img
                          src={item?.userId?.photo}
                          width="30px"
                          height="30px"
                          className="img-coment"
                        />
                        <h3>{item.userId?.name} </h3>
                      </div>
                      <div>
                      </div>
                    </div>
                    <div className="flex column g-25">
                      <p class="comment-text">{item.comment}</p>
                      {item?.userId?._id === idUser ? (
                        <div className="flex justify-end w-100 g-25">
                          <div className="delete edit-B">
                            <h5 onClick={handleOpen2}>
                              {open2 ? "Close" : ""}
                              <img src="../img/edit.png" width="15" alt="img" />
                            </h5>
                            <div>
                              {open2 ? (
                                <form class=" textarea" ref={information}>
                                  <div className="div-edit">
                                    <input
                                      defaultValue={comments?.comment}
                                      type="text "
                                      class=" textarea2"
                                      name="comment"
                                      ref={comment}
                                    />
                                    <div>
                                      <div class="flex g-25">
                                        <input
                                          type="submit"
                                          value="Edit comment"
                                          className="delete"
                                          onClick={editComments}
                                          name={item._id}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              ) : /*  <Comments idC={idComment} /> */

                              null}
                            </div>
                          </div>
                          <div className="delete">
                            <img
                              src="../img/delete.png"
                              className="iconC"
                              alt="img"
                              onClick={deleteFunc}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
