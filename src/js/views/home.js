import React, { useContext } from "react";
import "../../styles/home.css";
import { Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import People from "../component/people";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h2 class=" subtitles d-flex p-2 text-warning">Characters</h2>
			<div className="d-flex gap-3">
				{
					store.people.map(person => <People id={person.uid} name={person.name} />)
				}
			</div>
			<div className="Planets">
				<h2 class=" subtitles d-flex p-2 text-warning">Planets</h2>
				<div className="row">
					<div className="col">
						<div className="card custom-card-style" style={{ width: '18rem' }}>
							<img src="https://starwars-visualguide.com/assets/img/planets/4.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Hoth</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className="buttons justify-content-between d-flex">
									<a href="#" className="btn btn-warning">Learn more</a>
									<button type="button" className="btn btn-outline-warning">
										<Heart size={25} />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card custom-card-style" style={{ width: '18rem' }}>
							<img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Dagobah</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className="buttons justify-content-between d-flex">
									<a href="#" className="btn btn-warning">Learn more</a>
									<button type="button" className="btn btn-outline-warning">
										<Heart size={25} />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card custom-card-style" style={{ width: '18rem' }}>
							<img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Alderaan</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className="buttons justify-content-between d-flex">
									<a href="#" className="btn btn-warning">Learn more</a>
									<button type="button" className="btn btn-outline-warning">
										<Heart size={25} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};
