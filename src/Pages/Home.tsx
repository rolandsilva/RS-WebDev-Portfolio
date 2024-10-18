import "./Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <section className="mainSection">
        {/* <header>
          <h1 className="homeH1">Home Page</h1>
        </header> */}
        <h3>Hello! I am</h3>
        <article>
          <h1>Roland Silva</h1>
          <p className="title">Full Stack Developer</p>
          <p className="description">
            Web Developer • Programmer • Software Engineer
          </p>
        </article>
        <div className="buttons">
          <a href="#resume" className="btn-home get-resume">
            Get Resume
          </a>
          <a href="#about" className="btn-home about-me">
            About Me
          </a>
        </div>
      </section>
      {/* <SocialLinks /> */}
    </main>
  );
};

const SocialLinks = () => {
  return (
    <section className="social-links">
      <a href="#github" className="social-link" aria-label="GitHub">
        GitHub
      </a>
      <a href="#linkedin" className="social-link" aria-label="LinkedIn">
        LinkedIn
      </a>
      <a href="#twitter" className="social-link" aria-label="Twitter">
        Twitter
      </a>
    </section>
  );
};

export default Home;
