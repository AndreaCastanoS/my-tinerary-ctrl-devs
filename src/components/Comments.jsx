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
import { useParams } from "react-router-dom";

export default function Comments(props) {
  let { idC } = props;
  const { idUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const { editComment, getComment } = commentsAction;
  let [hotelsShow, setHotelsShow] = useState([]);
  /* let { id } = useParams(); */
  
  useEffect(() => {
    
    axios
      .get(`${apiUrl}api/shows`)
      .then((res) => setHotelsShow(res.data.response));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let idShow = hotelsShow.map((e) => e._id);
    dispatch(getComment({ id: idShow }));

    // eslint-disable-next-line
  }, []);

  let information = useRef();
  let comment = useRef();

  async function editComments(event) {
    event.preventDefault();
    let edit;
    hotelsShow.map((item) => {
      edit = {
        userId: idUser,
        showId: item._id,
        comment: comment.current.value,
        date: "02-02-2023",
      };
    });
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
          id: idC,
          token: token,
          edit: edit,
        };
        try {
          dispatch(editComment(data));
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
    <form class=" textarea" onSubmit={editComments} ref={information}>
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
            <input type="submit" value="Edit comment" className="delete"/>
          </div>
        </div>
      </div>
    </form>
  );
}
