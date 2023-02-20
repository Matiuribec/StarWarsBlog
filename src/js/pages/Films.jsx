import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Films = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("films")},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">Films</h1>
			<div className="container">
				<div className="row d-flex flex-wrap">
					
					{store.films.map((film)=> (<div key={film.uid} className="col-3 mt-4">
						<Cards
					id={film.uid}
					type="films"
					img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
					title={film.properties.title}
					/>
					</div>
					))}
					</div>
				

			</div>
				
		</div>
	);

					}
Films.propTypes = {
	match: PropTypes.object
};