import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Details = () => {
    const { store, actions } = useContext(Context);
    const { theid, type } = useParams(

    )

    return (
        <div className="container">
            {theid}
            {(type == "people" ? "this is a person" : type == "planet" ? "this is a planet" : type == "vehicles" ? "this is a vehicle" : "invalid type")}
        </div>
    );
};
