import React, { useContext } from "react";
import "../../styles/home.css";
import { Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import People from "../component/people";
import Planets from "../component/planets";
import Starships from "../component/starships";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h2 className=" subtitles d-flex p-2 text-warning">Characters</h2>
			<div className="d-flex gap-3">
				{
					store.people.map((people, index) => <People id={people.uid} name={people.name} index={index} />)
				}
			</div>
			<h2 className=" subtitles d-flex p-2 text-warning">Planets</h2>
			<div className="d-flex gap-3">
				{
					store.planet.map((planet, index) => <Planets id={planet.uid} name={planet.name} index={index} />)
				}
			</div>
			<h2 className=" subtitles d-flex p-2 text-warning">Starships</h2>
			<div className="d-flex gap-3">
				{
					store.starships.map((starships, index) => <Starships id={starships.uid} name={starships.name} index={index} />)
				}
			</div>

		</div>
	)
};
