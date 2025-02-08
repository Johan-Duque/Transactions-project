import React from "react";
import "./SearchTransactions.css"

function SearchTransactions (props) {
    return (
        <input type="text" 
        placeholder="Busque por palabra clave" id="SearchTransactions">
        </input>
    )
}

export { SearchTransactions }