import "./AboutPage.css";

const AboutPage = () => {
  // <main className="home-container">
  //   <section className="mainSection">
  //   </section>
  //   </main>

  /* <article>
          <h1>Roland Silva</h1>
          <p className="title">Full Stack Developer</p>
          <p className="description">
            Web Developer • Programmer • Software Engineer
          </p>
        </article> */
  return (
    <section className="profilecontainer">
      {/* <div className="profilecontent"> */}
      {/* <h3>About Page</h3> */}
      <div className="profilesection">
        <div className="profilecontent">
          {/* <h1>Zonayed Ahmed</h1> */}
          <p className="profilep">
            Hello! I am Roland Silva a passionate software engineer. I develop
            web applications, mobile apps, and desktop applications. My core
            skill is HTML, CSS, JavaScript and React and I love to work with it.
            I am a Computer Science graduate from Southern New Hampshire
            University and Kenzie Academy.
          </p>
          <div className="aboutbuttons">
            <button className="about-button">Get Resume</button>
            <button className="about-button">My Skills</button>
          </div>
        </div>
        <div className="imgdiv">
          <img
            src="images/IMG_coconut.jpg"
            alt="Profile Picture"
            className="profileimage"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
