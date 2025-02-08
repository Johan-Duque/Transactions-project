import React from "react";
import "./Transactions.css"

function Transactions ({title, money, background}) {
    return (
        <div style={{
            background: background
        }} className="Transactions">
            <h3>{title}</h3>
            <p>{money}$</p>
        </div>
    )
}

export { Transactions }