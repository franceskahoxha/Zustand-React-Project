import React from "react";
import useStore from "../stores/updateName";

function Name() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const [name, updateName] = useStore((state) => [
    state.name,
    state.updateName,
  ]);
  const updateFirstName = useStore((state) => state.updateFirstName);

  const removeFirstName = useStore((state) => state.removeFirstName);

  return (
    <main>
      <label>First name:</label>
      <input
        // Update the "firstName" state
        onChange={(e) => updateName(e.currentTarget.value)}
        value={name}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            removeFirstName();
            updateFirstName(name);
          }
        }}
      />
      <p>
        Hello, <strong>{updateFirstName}!</strong>
      </p>
    </main>
  );
}

export default Name;
