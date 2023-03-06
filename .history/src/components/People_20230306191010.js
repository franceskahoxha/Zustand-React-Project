import React from "react";
import useStore from "../store";

function People() {
  const people = useStore((state) => state.people);
  console.log(people);
  return (
    <div>
      We have {people.length} people in our DB
      <ul>
        {people.map((p, i) => {
          return <li key={i}>{p}</li>;
        })}
      </ul>
    </div>
  );
}

export default People;