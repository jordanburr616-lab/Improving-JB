function About() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "120px 24px",
  };

  return (
    <div style={{ background: "#afb1b3ff", minHeight: "100vh" }}>
      <section style={containerStyle}>
        {/* IMAGE */}
        <div
          style={{
            width: "100%",
            height: "420px",
            borderRadius: "20px",
            background: "#e5e7eb",
            marginBottom: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#777",
            fontWeight: "600",
          }}
        >
          ICONIC IMAGE / VISUAL GOES HERE
        </div>

        {/* TEXT */}
        <div style={{ maxWidth: "720px" }}>
          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            <strong>I believe systems are what build successful people.</strong>
          </p>

          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            For the longest time, I relied on motivation to improve myself.
            Sometimes it worked. Most of the time though, it didn’t. The progress
            was too inconsistent and it kept on leading me to dead ends that
            forced me to start over.
          </p>

          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            Everything changed when I stopped chasing motivation and started
            building structure. Having clear rules leading to fewer decisions.
            Systems that worked even when I didn’t feel like showing up.
          </p>

          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            Over time, those systems helped me rebuild my habits, discipline, and
            direction. This site exists to share what I’ve learned. Not hype or
            inspiration, but practical systems that actually work.
          </p>

          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            I studied computer science which helped me further my understanding
            with coding, but more importantly, I learned how systems work. How
            structure, constraints, and feedback loops shape behavior. That way
            of thinking now drives everything I build here.
          </p>

          <p style={{ marginBottom: "28px", lineHeight: "1.8" }}>
            Bands, the stick figure, started as a simple drawing and became
            something more. It represents execution without emotion. Action
            before overthinking. Progress built one brick at a time.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            Bands isn’t a mascot. It’s a reminder of the person you become when
            you stop waiting to feel ready and start building towards your
            dreams.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
