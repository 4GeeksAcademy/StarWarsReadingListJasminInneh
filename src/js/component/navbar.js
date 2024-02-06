import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" width="65" height="35" /></span>
			</Link>
			<div class="dropdown">
  				<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites
  				</button>
  				<ul class="dropdown-menu">
    				<li><a class="dropdown-item" href="#">Action</a></li>
  				</ul>
			</div>
		</nav>
	);
};
