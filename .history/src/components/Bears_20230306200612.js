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
      <p>now i have {removeAllBears} here</p>
    </>
  );
}

export default Bears;
