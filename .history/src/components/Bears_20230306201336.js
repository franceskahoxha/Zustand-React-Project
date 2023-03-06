import React from "react";
import useStore from "../stores/bear";

function Bears() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={increasePopulation}>one up</button>
      <p>{bears} around here...</p>
      <button onClick={removeAllBears}>remove all bears</button>
    </>
  );
}

export default Bears;
