import React from "react";
import Bodybuilder from "./Bodybuilder";


function MassMonster({data}) {
  const massMonsterEraBodybuilders = data.filter(bodybuilder => bodybuilder.era.toLowerCase() === "mass monster")

    return (
      <div>
        <h1>Mass Monster Era</h1>
        {massMonsterEraBodybuilders.map(bodybuilder => (
          <Bodybuilder bodybuilder={bodybuilder} />
        ))}
        </div>
    )
  }

export default MassMonster;