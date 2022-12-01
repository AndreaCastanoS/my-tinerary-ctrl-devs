import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyReactionCard from "../components/MyReactionCard";
import reactionsActions from "../redux/actions/reactionsActions";
import Swal from "sweetalert2";

export default function MyReactions() {
  const { token, idUser } = useSelector((state) => state.user);
  const { myreactions } = useSelector((state) => state.reactions);
  const { getMyReactions, deleteMyReactions } = reactionsActions;
  let dispatch = useDispatch();

  console.log(token);
  console.log(idUser);
  console.log(myreactions);

  useEffect(() => {
    dispatch(getMyReactions({ idUser, token }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="vh-100 w-100 flex column justify-center">
      <div className="h flex justify-center">
        <h1 className="tittle-find text-center p-2">My Reactions</h1>
      </div>
      <div className="justify-center flex align-center wrap w-100 g-25">
        {myreactions?.map((item) => {
          function deleteFunc() {
            Swal.fire({
              icon: "question",
              title: " Do you want to delete the reaction?",
              showConfirmButton: true,
              iconColor: "#01344f",
              confirmButtonColor: "#01344f",
              confirmButtonText: "Yes",
              showCancelButton: true,
            }).then(async (result) => {
              if(result.isConfirmed) {
                try {
                  dispatch(deleteMyReactions({ idReaction: item._id, token }));
                } catch (error) {
                  console.log(error);
                }
              }
            });
          }
          return (
            <MyReactionCard
              name={item.itineraryId.name}
              nameReaction={item.name}
              photo={item.itineraryId.photo[0]}
              reaction={item.icon}
              onClick={deleteFunc}
            />
          );
        })}
      </div>
    </div>
  );
}
