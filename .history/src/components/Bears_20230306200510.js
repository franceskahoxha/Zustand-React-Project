import React from "react";
import useStore from "../store";

function Bears() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <p>{bears} around here...</p>
    </>
  );
}

export default Bears;
