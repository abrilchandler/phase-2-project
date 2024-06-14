import React from "react";
import Bodybuilder from "./Bodybuilder.js";

function Golden({data}) {

  // const goldenEraBodybuilders = data.filter(bodybuilder => bodybuilder.era.toLowerCase() === "golden")

    return (
      <div>
        <h1>Golden Era</h1>
        {data.map(bodybuilder => (
          <Bodybuilder bodybuilder={bodybuilder} />
        ))}
      </div>
    )
  }

export default Golden;