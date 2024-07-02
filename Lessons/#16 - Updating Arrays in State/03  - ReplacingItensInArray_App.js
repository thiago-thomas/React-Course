import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1; // Increment the clicked counter
      } else {
        return c; // The rest haven't changed
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, index) => (
        <li key={index}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(index);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
