import React from 'react'
import Product1Img from '../../assets/ProductImages/ProductID1.jpg'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer({id, imagen, nombre, descripcion, precio}) {
    return(
        <div className="ItemDetail">
            <img src={imagen} />
            <h3>{nombre}</h3>
            <h5>{descripcion}</h5>
            <h2>{precio}</h2>
        </div>
    )
}