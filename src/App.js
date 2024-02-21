import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const [range, setRange] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleChange(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={handleChange}
          ></input>
          <span>{step}</span>
        </div>
        <div>
          <button onClick={() => setCount(count - step)}> - </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={() => setCount(count + step)}> + </button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </header>
    </div>
  );
}
