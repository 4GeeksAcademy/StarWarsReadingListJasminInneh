import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Details = () => {
    const { store, actions } = useContext(Context);
    const { theid, type } = useParams()
    const [details, setDetails] = useState()
    useEffect(() => {
        if (type == "people") {
            fetch(`https://www.swapi.tech/api/people/${theid}`)
                .then((resp) => {
                    if (!resp.ok) throw Error(resp.statusText);
                    return resp.json();
                })
                .then((data) => {
                    console.log(data);
                    setDetails(data.result.properties)

                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (type == "planets") {
            fetch(`https://www.swapi.tech/api/planets/${theid}`)
                .then((resp) => {
                    if (!resp.ok) throw Error(resp.statusText);
                    return resp.json();
                })
                .then((data) => {
                    console.log(data);
                    setDetails(data.result.properties)

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [])
    return (
        <div className="container">
            {(type == "people" ? details && <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" />
                    </div>
                    <div className="col">
                        <h1 className="text-warning">{details.name}</h1>
                        <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="row">
                    <table className="col-12">
                        <tbody>
                            <tr className="text-warning">
                                <th>Name</th>
                                <th>Height</th>
                                <th>Mass</th>
                            </tr>
                            <tr className="text-light">
                                <td>
                                    {details.name}
                                </td>
                                <td>
                                    {details.height}
                                </td>
                                <td>
                                    {details.mass}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div> || <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> : type == "planets" ? details && <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" />
                        </div>
                        <div className="col">
                            <h1 className="text-warning">{details.name}</h1>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <hr className="bg-light" />
                    <div className="row">
                        <table className="col-12">
                            <tbody>
                                <tr className="text-warning">
                                    <th>Name</th>
                                    <th>Diameter</th>
                                    <th>Gravity</th>
                                </tr>
                                <tr className="text-light">
                                    <td>
                                        {details.name}
                                    </td>
                                    <td>
                                        {details.diameter}
                                    </td>
                                    <td>
                                        {details.gravity}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div> || <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : type == "starships" ? details && <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" />
                            </div>
                            <div className="col">
                                <h1 className="text-warning">{details.name}</h1>
                                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <hr className="bg-light" />
                        <div className="row">
                            <table className="col-12">
                                <tbody>
                                    <tr className="text-warning">
                                        <th>MGLT</th>
                                        <th>Created</th>
                                        <th>Crew</th>
                                    </tr>
                                    <tr className="text-light">
                                        <td>
                                            {details.mglt}
                                        </td>
                                        <td>
                                            {details.created}
                                        </td>
                                        <td>
                                            {details.crew}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div> || <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : "invalid type")}

        </div>
    );
};
