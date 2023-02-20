import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Species = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("species")},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">Species</h1>
			<div className="row d-flex flex-wrap">
				{store.species.map((specie, index)=> (
					<div key={specie.uid} className="col-3 mt-4">
						<Cards
						id={specie.uid}
						type="species"
						text="A Star Wars specie"
						img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
						title={specie.name}
						index={index}
						/>
					</div>
					))}
			</div>
				
				
		</div>
	);

	}
Species.propTypes = {
	match: PropTypes.object
};