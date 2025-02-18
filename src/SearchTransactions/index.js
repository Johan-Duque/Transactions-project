import React from "react";
import "./SearchTransactions.css"

function SearchTransactions (props) {

    const [state, setState] = React.useState('');

    return (
        <input type="text" 
        placeholder="Busque por palabra clave" id="SearchTransactions" value={state} 
        onChange={(ev) => setState(ev.target.value)}>
        </input>
    )
}

export { SearchTransactions }