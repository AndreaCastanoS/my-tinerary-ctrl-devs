import { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import usersAction from "../redux/actions/usersActions";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../url";
import { Link as NavLink } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { idUser, user } = useSelector((state) => state.user);
  const { getUser /* updateUser */ } = usersAction;

  useEffect(() => {
    dispatch(getUser(idUser));

    // eslint-disable-next-line
  }, []);
  console.log(user);

  let information = useRef();
  let name = useRef();
  let lastName = useRef();
  let photo = useRef();
  let age = useRef();
  let mail = useRef();
  /*  let password = useRef(); */

  async function editUser(event) {
    event.preventDefault();
    let editUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
      /* password: password.current.value, */
    };

    Swal.fire({
      icon: "question",
      title: " Do you want to save the changes?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: "Yes",
      showCancelButton: true,
    });
    try {
      let res = await axios.patch(`${apiUrl}api/auth/me/${idUser}`, editUser);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  /*   function edit() {
    Swal.fire({
      icon: "question",
      title: "Would do you like close your session?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateUser(idUser, editUser));
      }
    });
  } */

  return (
    <div className="formHotelAdmin">
      <div className="flex justify-center column align-center w-100">
        <h3>{user.name}</h3>
        <img src={user.photo} className="photo-user-profile" />
      </div>
      <form onSubmit={editUser} ref={information}>
        <fieldset className="edithotelfieldset">
          <label>
            Name
            <input
              defaultValue={user.name}
              type="text"
              placeholder="Insert id of the hotel"
              id="id"
              ref={name}
            />
          </label>
          <label>
            lastName
            <input
              defaultValue={user.lastName}
              type="text"
              placeholder="Insert name of the hotel"
              id="name"
              ref={lastName}
            />
          </label>

          <label>
            Photo
            <input
              defaultValue={user.photo}
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo1"
              ref={photo}
            />
          </label>
          <label>
            Age
            <input
              defaultValue={user.age}
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo2"
              ref={age}
            />
          </label>
          <label>
            Email
            <input
              defaultValue={user.mail}
              type="text"
              placeholder="Insert photo URL of the hotel"
              id="photo3"
              ref={mail}
            />
          </label>
          {/*  <label>
            Password
            <input
              type="password"
              placeholder="Password"
              id="description"
              ref={password}
            />
          </label> */}
        </fieldset>
        <div className="flex justify-around  p-1 wrap g-25">
          <input
            type="submit"
            /* onClick={edit} */
            required
            className="btn"
            value="EDIT MY PROFILE"
          />
          <NavLink className="w-100 margin-none flex justify-end" to="/index">
            <button className="back">Back to home</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
