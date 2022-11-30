import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function Reaction(props) {
  let { idTinerary } = props;
  const { token, idUser } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { getReactions, updateReactions } = reactionsActions;
  const [reaction, setReaction] = useState([]);
  const [reload, setReload] = useState(true);

  async function changeIcon(event) {
    let name;
    reaction.reactions.data.forEach((e) => {
      if (e.name === event.target.name) {
        name = e.name;
      }
    });
    try {
      await dispatch(updateReactions({ id: idTinerary, name, token }));
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    reactions();
    // eslint-disable-next-line
  }, [reload]);

  async function reactions() {
    let res = await dispatch(getReactions(idTinerary));
    setReaction(res.payload);
  }

  console.log(reaction);
  return (
    <>
      {reaction.success &&
        reaction.reactions.data?.map((e) => {
          let res = e.userId.find((user)=> user._id === idUser)
          return (
            res ? (
            <><img
              src={e.icon}
              width="15"
              alt={e.name}
              name={e.name}
              className="reaction"
              onClick={changeIcon}
            />
            <p>{reaction.reactions.lengthOfReactions[e.name]}</p>
            </>) : (
              <>
              <img
              src={e.iconBack}
              width="15"
              alt={e.name}
              name={e.name}
              className="reaction"
              onClick={changeIcon}
            />
            <p>{reaction.reactions.lengthOfReactions[e.name]}</p>
            </>
            )
          );
        })}
    </>
  );
}
