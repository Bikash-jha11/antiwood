import { useState } from "react";

export default function GlassTabs() {
  const [active, setActive] = useState("Review");

  const tabs = ["Review", "Solve", "Prevent"];

  return (
    <div className="glass-tab-container">
      <div className="glass-tab-bg" />

      <div className="glass-tab">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`glass-tab-btn ${active === tab ? "active" : ""}`}
          >
            {active === tab && <span className="indicator"></span>}
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
