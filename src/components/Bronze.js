import React from "react";
import Bodybuilder from "./Bodybuilder.js";


function Bronze({data}) {
    const bronzeEraBodybuilders = data.filter(bodybuilder => bodybuilder.era.toLowerCase() === "bronze");

    return (
        <div>
            <h1>Bronze Era</h1>
           {bronzeEraBodybuilders.map(bodybuilder => (
            <Bodybuilder bodybuilder={bodybuilder} />
           ))}
        </div>
    )
}

export default Bronze;