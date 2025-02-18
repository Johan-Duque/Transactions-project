import React from "react";
import "./Transactions.css"

function Transactions ({title, money, background}) {
    return (
        <div style={{
            background: background
        }} className="Transactions">
            <h3>{title}: {money}$</h3>
        </div>
    )
}

export { Transactions }