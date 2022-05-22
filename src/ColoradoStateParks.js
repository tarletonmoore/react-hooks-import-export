import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain"

console.log(RMFunctions.trees)

RMFunctions.wildlife()

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks