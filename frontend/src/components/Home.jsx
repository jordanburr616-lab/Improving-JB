function Home() {
  return (
        <>
      <SocialLinks />
      
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      {/* HERO */}
      <section style={{ marginBottom: "64px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
          Improve Everyday
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.8,
            marginBottom: "32px",
          }}
        >
          I turn ideas into structure — and prove they work through real life.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            style={{
              background: "#6ec1e4",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Chat with Bands
          </button>

          <button
            style={{
              background: "transparent",
              border: "1px solid #ccc",
              padding: "12px 18px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Watch Latest Video
          </button>
        </div>
      </section>

      {/* IDENTITY STRIP */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          marginBottom: "64px",
        }}
      >
        <div>
          <div
            style={{
              background: "#e5e7eb",
              height: "180px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
              color: "#555",
            }}
          >
            YOU
          </div>
          <h3>You</h3>
          <p style={{ opacity: 0.7 }}>
            Real discipline. Real lifting. Real consistency.
          </p>
        </div>

        <div>
          <div
            style={{
              background: "#e5e7eb",
              height: "180px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
              color: "#555",
            }}
          >
            BANDS
          </div>
          <h3>Bands</h3>
          <p style={{ opacity: 0.7 }}>
            The ideas. The patterns. The thinking behind the work.
          </p>
        </div>
      </section>

      {/* WHAT I'M BUILDING */}
      <section style={{ marginBottom: "64px" }}>
        <h2>What I’m building</h2>
        <p style={{ maxWidth: "600px", opacity: 0.8 }}>
          This site is a living system.
          <br />
          Videos explore ideas.
          <br />
          Tools help apply them.
          <br />
          Progress proves what works.
        </p>
      </section>

      {/* CURRENT FOCUS */}
      <section>
        <h2>Current Focus</h2>
        <div
          style={{
            background: "#e5e7eb",
            height: "200px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            marginBottom: "12px",
          }}
        >
          Latest YouTube Video
        </div>
        <p>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#0078ff" }}
          >
            Watch on YouTube →
          </a>
        </p>
      </section>
    </div>
    </>
  );
}

function SocialLinks() {
  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        zIndex: 100,
      }}
    >
      <a
        href="https://www.youtube.com/@improvingjb/videos"
        target="_blank"
        rel="noreferrer"
        style={iconStyle}
      >
        YT
    {/* <img **FOR LATER UPGRADES**
        src="/youtube-icon.png"
        alt="YouTube"
        style={{
            width: "18px",
            height: "18px",
            objectFit: "contain",
        }}
    /> */}
      </a>

      <a
        href="https://www.instagram.com/improvingjb/?hl=en"
        target="_blank"
        rel="noreferrer"
        style={iconStyle}
      >
        IG
      </a>

      <a
        href="https://www.tiktok.com/@animedriven"
        target="_blank"
        rel="noreferrer"
        style={iconStyle}
      >
        TT
      </a>
    </div>
  );
}

const iconStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  opacity: 0.85,
  transition: "opacity 0.2s ease, transform 0.2s ease",
};

export default Home;

