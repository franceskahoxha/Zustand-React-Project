import React from "react";
import useStore from "../store";

function Bears() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <p>{bears} around here...</p>
      <button>onClick={removeAllBears}remove all bears</button>
    </>
  );
}

export default Bears;
