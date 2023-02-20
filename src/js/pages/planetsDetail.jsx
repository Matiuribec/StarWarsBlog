import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const { planetid } = useParams();
  const [data, setData] = useState({});
 
  useEffect(() => {
    actions.getDetails("planets", planetid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Planets</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
              img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
                text= {<div>
                  <ul>
                    <li>Name: {data.name} </li>
                    <li>Diameter:{data.diameter}</li>
                    <li>Orbital Period:{data.orbital_period} </li>
                    <li>Gravity:{data.gravity} </li>
                    <li>Rotational Period:{data.rotational_period} </li>
                    <li>Population: {data.population}</li>
                    <li>Climate: {data.climate}</li>
                    <li>Terrain: {data.terrain}</li>


                  </ul>
                </div>}
                type="planets"
                
                
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default PlanetDetail;
