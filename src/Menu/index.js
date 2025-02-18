import React from "react";
import "./Menu.css"

function Menu () {
    return (
        <nav className="Menu">
            <div className="Menu-div__logo">
                <h1>Company</h1>
            </div>
            <div className="Menu-div__options">
                <ul>
                    <li>History</li>
                    <li>Lenguaje</li>
                    <li>Theme</li>
                </ul>
            </div>
        </nav>
    )
}

export { Menu }