import React from "react";
import "./TransactionHistory.css"

function TransactionHistory ({children}) {
    return (
        <div id="TransactionHistory">
            {children}
        </div>
    )
}

export { TransactionHistory }