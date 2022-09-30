import './Navbar.css';
import React from "react";
import Cartwidget from './Cartwidget/Cartwidget.js'

export default function Navbar() {
    return (
        <div className="NavbarContainer">
            <h3 className="Navbar--logo">Night Wish</h3>
            <div className="Navbar--buttons">
                <button className="Navbar--buttons--decks">Woman</button>
                <button className="Navbar--buttons--trucks">Man</button>
                <button className="Navbar--buttons--wheels">About</button>
            </div>
            <Cartwidget />
        </div>
    
    )
}