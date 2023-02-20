import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const VehiclesDetail = () => {
  const { store, actions } = useContext(Context);
  const { vehicleid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("vehicles", vehicleid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">vehicles</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="vehicles"
                text={<div>
                  <ul>
                    <li>Name: {data?.name} </li>
                    <li>Model: {data?.model} </li>
                    <li>Vehicle Class: {data?.vehicle_class} </li>
                    <li>Manufacturer: {data?.manufacturer} </li>
                    <li>Cost in Credits: {data?.cost_in_credits} </li>
                    <li>Length: {data?.length} </li>
                    <li>Max Speed: {data?.max_atmosphering_speed} </li>
                    <li>Cargo Capacity: {data?.cargo_capacity} </li>
                    
                    
                    

                  </ul>
                </div>}
                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default VehiclesDetail;
