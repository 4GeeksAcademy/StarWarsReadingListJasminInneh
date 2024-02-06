import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="container text-center">
  		<div className="row">
    		<div className="col">
			<div className="card" style={{ width: '18rem' }}>
				<img src="..." className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Leia Organa</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Learn more</a>
				</div>
			</div>	
    		</div>
    		<div className="col">
			<div className="card" style={{ width: '18rem' }}>
				<img src="./assets/img/characters/1.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Beru Whitesun Lars</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Learn more</a>
				</div>
			</div>	
    		</div>
    		<div className="col">
			<div className="card" style={{ width: '18rem' }}>
				<img src="..." className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">C-3PO</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Learn more</a>
				</div>
			</div>	
    		</div>
  		</div>
	</div>
);
