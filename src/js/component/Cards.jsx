import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
const Cards = (props) => {
  const { store, actions } = useContext(Context);
  function imgError(e) {
    e.target.src =
      "https://pbs.twimg.com/media/BwoLCcUIgAAE_DE?format=png&name=900x900";
  }
  function favExist(index) {
    let valueExist;
    for (let i = 0; i < store.favorites.length; i++) {
      if (store.favorites[i].index == index) {
        valueExist = true;
      }
    }
    if (valueExist === true) {
      return true;
    }
  }
  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
        onError={imgError}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={`/${props.type}/${props.id}`} className="btn btn-primary">
          See Details
        </Link>
        <button
          onClick={() =>
            actions.handleFavorites({
              name: props.title,
              link: `/${props.type}/${props.id}`,
            })
          }
          type="button"
          className="btn btn-light"
        >
          <i
            className={
              // favExist(props.index) == true
              //   ? "bi bi-suit-heart text-danger" : 
                "bi bi-suit-heart"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Cards;
