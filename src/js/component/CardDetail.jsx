import React from "react";
import { Link, useNavigate } from "react-router-dom";


const CardDetail = (props) => {

  const navigate = useNavigate
  function imgError(e){
    e.target.src = "https://pbs.twimg.com/media/BwoLCcUIgAAE_DE?format=png&name=900x900"
  }

  return (
    <div className="card w-25 mx-auto">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
        onError={imgError}
      />
      <div className="card-body ">
        <h5 className="card-title">{props.title}</h5>
        
            {props.text}

            
            
        
        <Link to={`/${props.type}`} className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
