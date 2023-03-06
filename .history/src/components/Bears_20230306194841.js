import React from "react";
import useStore from "../components/Bears";

function Bears() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <h1>{bears} around here...</h1>
    </>
  );
}

export default Bears;
