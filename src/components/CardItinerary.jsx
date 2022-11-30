import React from "react";
import Reaction from "../components/Reaction";


export default function CardItinerary(props) {
  let { name, price, description, photo, duration, id} = props;

  // const changeIcon = async () =>{
	// 	if(props.token){
	// 		let res = await props.darMeGustaYSacarMeGusta(props._id)
	// 		if(res.data.success){
	// 			props.obtenerItinerarios(props.id)
	// 			setImagenConMegusta(!imagenConMegusta)
	// 		}
	// 	}else{
	// 		Toast.fire({
	// 			icon: 'info',
	// 			title:	"You must be logged in to like a post",		
	// 	  })
	// 	}
	// }

  return (
    <div className="card2">
      <div className="card-header">
        <img src={photo} alt="city" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h5>USD ${price}</h5>
        <h5>
          Duration:
          {duration}
          hour
        </h5>
      </div>
      <div className="flex justify-end w-100 g-25 p-0-5">
     
       <Reaction idTinerary={id}  />
      </div>
    </div>
  );
}
