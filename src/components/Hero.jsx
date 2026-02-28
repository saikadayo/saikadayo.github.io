import me from "../assets/me.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-bg-name">SAIKA PHU</div>

        <div className="hero-foreground">
          <div className="hero-photo">
            <img
              src={me}
              alt="Saika Phu"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <p className="hero-subtitle">FULL-STACK ENGINEER</p>

          <h1 className="hero-name">
            <span>Saika</span> Phu{" "}
            <small className="hero-nee">(née Chheav)</small>
          </h1>

          <p className="hero-tagline">
            full-stack engineer building react and node.js applications. 
            started in business, stayed in saas, and eventually decided 
            i’d rather build the tools than just use them.
          </p>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;