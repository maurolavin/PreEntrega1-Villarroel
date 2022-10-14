import React from "react";
import { Link } from "react-router-dom";

export default function ItemContainer({id, img, nombre, precio}) {
    return(
        <div>
            <p>{id}</p>
            <img src={img} className="ItemContainerImg"/>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}