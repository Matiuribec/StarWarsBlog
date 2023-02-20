import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx";
import propTypes from "prop-types";

export const CharactersDetail = () => {
  const { store, actions } = useContext(Context);
  const { characterid } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    actions.getDetails("people", characterid).then((reply) => setData(reply));
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Characters</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <CardDetail
              type="characters"
              text={
                <div>
                  <ul>
                    <li>Name: {data?.name} </li>
                    <li>Birth Year: {data?.birth_year} </li>
                    <li>Height: {data?.height}</li>
                    <li>Mass: {data?.mass} </li>
                    <li>Skin Color: {data?.skin_color} </li>
                    <li>Hair Color: {data?.hair_color} </li>
                    <li>Eye Color: {data?.eye_color} </li>
                    <li>Gender: {data?.gender} </li>
                  </ul>
                </div>
              }
              img={`https://starwars-visualguide.com/assets/img/characters/${characterid}.jpg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersDetail;
