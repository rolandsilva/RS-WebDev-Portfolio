import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="home-container">
      <section className="mainSection">
        {/* <header>
          <h1 className="homeH1">Home Page</h1>
        </header> */}
        <h3>About Page</h3>
        <article>
          <h1>Roland Silva</h1>
          <p className="title">Full Stack Developer</p>
          <p className="description">
            Web Developer • Programmer • Software Engineer
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
