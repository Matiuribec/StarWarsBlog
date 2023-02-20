import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const StarshipsDetail = () => {
  const { store, actions } = useContext(Context);
  const { starshipsid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("starships", starshipsid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Starships</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="starships"
                text={<div>
                  <ul>
                    <li>Name: {data?.name} </li>
                    <li>Model: {data?.model} </li>
                    <li>Starship Class: {data?.starship_class} </li>
                    <li>Manufacturer: {data?.manufacturer} </li>
                    <li>Cost in Credits: {data?.cost_in_credits} </li>
                    <li>Length: {data?.length} </li>
                    <li>Max Speed: {data?.max_atmosphering_speed} </li>
                    <li>Cargo Capacity: {data?.cargo_capacity} </li>
                    <li>Hyperdrive Rating: {data?.hyperdrive_rating} </li>
                    
                    

                  </ul>
                </div>}
                img={`https://starwars-visualguide.com/assets/img/starships/${starshipsid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default StarshipsDetail;
