import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import Comments from "./Comments";

export default function CommentsCard(props) {
  const [open2, setOpen2] = useState(false);
  let user = useSelector((store) => store.user);
  const { idUser, token } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  let { photo, name, comment, date, onClick, idComment } = props;
  const handleOpen2 = () => {
    open2 ? setOpen2(false) : setOpen2(true);
  };

  return (
    <div>
      <div className="containerCard">
        <div className="p-2-5 containerCard2">
          <div>
            <div className="flex g-25 img-name align-center">
              <div>
                <img
                  src={photo}
                  width="80px"
                  height="80px"
                  className="img-coment"
                />
              </div>
              <div>
                <h3>{name} </h3>
              </div>
            </div>

            <div className="flex column g-25">
              <p class="comment-text">{comment}</p>
              {/* {idUser === comments?.userId ?  ( */}
                <div className="flex justify-end w-100 g-25">
                  <div className="delete edit-B">
                    <h5 onClick={handleOpen2}>
                      {open2 ? "Close" : ""}
                      <img src="../img/edit.png" width="15" alt="img" />
                    </h5>
                    <div>{open2 ? <Comments idC={idComment} /> : null}</div>
                  </div>
                  <div className="delete">
                    <img
                      src="../img/delete.png"
                      width="15"
                      alt="img"
                      onClick={onClick}
                    />
                  </div>
                </div>
             {/*  ) : null} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
