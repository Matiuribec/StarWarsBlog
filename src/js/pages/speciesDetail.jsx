import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const SpeciesDetail = () => {
  const { store, actions } = useContext(Context);
  const { specieid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("species", specieid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Species</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="species"
                text={<div>
                  <ul>
                    <li>Classification: {data?.classification} </li>
                    <li>Designation: {data?.designation} </li>
                    <li>Average Height: {data?.average_height}cm </li>
                    <li>Average Lifespan: {data?.average_lifespan} </li>
                    <li>Name: {data?.name} </li>
                    <li>Language: {data?.language} </li>
                    
                    

                  </ul>
                </div>}
                img={`https://starwars-visualguide.com/assets/img/species/${specieid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SpeciesDetail;
