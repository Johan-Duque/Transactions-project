import React from "react";
import "./Container.css"

function Container (props) {
    return (
        <div id="Box">
            <div id="Container">
                <h2>income - expense history</h2>
                {props.children}
            </div>
        </div>
    )
}

export { Container }