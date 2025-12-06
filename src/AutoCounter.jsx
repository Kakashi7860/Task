import { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 10) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Auto Counter (Stops at 10) - Purva</h2>
      <h1 style={{ fontSize: "4rem" }}>{count}</h1>
      <p>Visit using route: <strong>/autocount</strong></p>
    </div>
  );
}

export default AutoCounter;
