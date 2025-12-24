import { useState } from "react";

import Home from "./components/Home";
import Programs from "./components/Programs";
import About from "./components/About";
import Chat from "./components/Chat";
import Momentum from "./components/Momentum";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
  switch (activeTab) {
    case "programs":
      return <div style={{ padding: "24px" }}><Programs /></div>;
    case "about":
      return <div style={{ padding: "24px" }}><About /></div>;
    case "chat":
      return <div style={{ padding: "24px" }}><Chat /></div>;
    case "momentum":
      return <div style={{ padding: "24px" }}><Momentum /></div>;
    default:
      return <Home />;
  }
};

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f5f6ff" }}>
      {/* NAV BAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 32px",
          backgroundColor: "#e8e9e9ff",
          borderBottom: "1px solid #646464ff",
        }}
      >
      {/* LOGO */}
      <div
        onClick={() => setActiveTab("home")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          }}
      >
      <img
        src="/images/youtube-logo.png"
        alt="YouTube logo"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",     
          objectFit: "cover",
        }}
      />

      <span
        style={{
          fontSize: "2.5rem",          
          fontWeight: "800",
          color: "#fafafaff",              
          WebkitTextStroke: "1px black", 
          letterSpacing: "0.8px",

          textShadow: `
            0 0 6px rgba(110, 193, 228, 0.6),
            0 0 12px rgba(110, 193, 228, 0.4),
            0 0 18px rgba(110, 193, 228, 0.25)
            `,
        }}
      >
        Improving JB
      </span>
    </div>

        {/* TABS */}
        <div style={{ display: "flex", gap: "16px" }}>
          <Tab label="Home" value="home" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Programs" value="programs" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="About Me" value="about" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Chat" value="chat" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Momentum" value="momentum" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </nav>

        
      {/* CONTENT */}
      <main>
        {renderTab()}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#e8e9e9ff",
          borderTop: "1px solid #646464ff",
          padding: "48px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Intentionally left blank */}
        </div>
      </footer>
    </div>
  );
}

function Tab({ label, value, activeTab, setActiveTab }) {
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",

        fontSize: "1.2rem",          
        fontWeight: isActive ? "700" : "500",
        letterSpacing: "0.4px",

        opacity: isActive ? 1 : 0.75,
        color: "#111",

        padding: "8px 4px",          
        borderBottom: isActive
          ? "3px solid black"
          : "3px solid transparent",

        transition: "opacity 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}

export default App;
