import React from "react"
import { Link } from "react-router-dom"
import { Heart } from "react-bootstrap-icons"

const People = (props) => {
    return (
        <div className="Characters">
            <div className="row">
                <div className="col">
                    <div className="card custom-card-style" style={{ width: '18rem' }}>
                        <img src="https://starwars-visualguide.com/assets/img/characters/5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="buttons justify-content-between d-flex">
                                <Link to={`/details/people/${props.id}`} className="btn btn-warning">Learn more</Link>
                                <button type="button" className="btn btn-outline-warning">
                                    <Heart size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People