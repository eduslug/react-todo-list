
import React from "react";

function List(props) {

    return (
        <div>
            <ul >
                {props.itens.map(itens => <li>{itens}</li>)}
            </ul>
        </div>)
}

export default List;