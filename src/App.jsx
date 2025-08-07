import React, { useState, useRef } from "react";

function App() {
  const [reactTitle, setReactTitle] = useState("React Title");
  const [reactUpdates, setReactUpdates] = useState(0);

 // Ref for vanilla DOM count and title
  const vanillaTitleRef = useRef("Vanilla JS Title");
  const vanillaUpdateCount = useRef(0);

  const handleVanillaChange = () => {
    vanillaTitleRef.current = `Vanilla Title ${vanillaUpdateCount.current + 1}`;
    document.getElementById("vanilla-title").innerText =
      vanillaTitleRef.current;
    vanillaUpdateCount.current += 1;
    document.getElementById(
      "vanilla-count"
    ).innerText = `Vanilla DOM Updates: ${vanillaUpdateCount.current}`;
  };

  const handleReactChange = () => {
    setReactTitle((prev) => `React Title ${reactUpdates + 1}`);
    setReactUpdates((prev) => prev + 1);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>Virtual DOM vs Traditional DOM Demo</h2>

      <div style={{ marginBottom: 20 }}>
        <button onClick={handleVanillaChange}>Change Title (Vanilla JS)</button>
        <p id="vanilla-title">Vanilla JS Title</p>
        <p id="vanilla-count">Vanilla DOM Updates: 0</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <button onClick={handleReactChange}>Change Title (React)</button>
        <p>{reactTitle}</p>
        <p>React DOM Updates: {reactUpdates}</p>
      </div>
    </div>
  );
}

export default App;
