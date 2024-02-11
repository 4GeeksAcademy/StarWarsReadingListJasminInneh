import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" width="65" height="35" /></span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">{
					store.favorites?.map((favorites, index) =>
						<li>{favorites.name}<button onClick={() => actions.removeFavorites(favorites)}>X</button></li>)
				}
				</ul>
			</div>
		</nav>
	);
};
