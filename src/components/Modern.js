import React from "react";
import Bodybuilder from "./Bodybuilder.js";

function Modern({data}) {
   // const modernEraBodybuilders = data.filter(bodybuilder => bodybuilder.era.toLowerCase() === "modern");

    return (
    <div>
        <h1>Modern Era</h1>
        {data.map(bodybuilder => (
            <Bodybuilder bodybuilder={bodybuilder} />
        ))}
    </div>
)
}

export default Modern;