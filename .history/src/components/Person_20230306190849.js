import React from "react";
import useStore from "../store";

function Person() {
  const people = useStore((state) => state.people);
  console.log(people);
  return (
    <div>
      We have {people.length} people in our DB
      <ul>
        {people.map((p, i) => {
          <li key={i}>{p}</li>;
        })}
      </ul>
    </div>
  );
}

export default Person;