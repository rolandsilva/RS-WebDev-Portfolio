import "./AboutPage.css";

const AboutPage = () => {
  return (
    // <main className="home-container">
    //   <section className="mainSection">
    //   </section>
    //   </main>
        <h3>About Page</h3>
        /* <article>
          <h1>Roland Silva</h1>
          <p className="title">Full Stack Developer</p>
          <p className="description">
            Web Developer • Programmer • Software Engineer
          </p>
        </article> */
        return (
          <section className="profile-section" className="profileSection">
            <div className="profileContent">
              <img
                src="https://via.placeholder.com/150" // Replace with the image URL or import
                alt="Profile"
                className="profileImage"
              />
              <div>
                <h1>Zonayed Ahmed</h1>
                <p>
                  I'm a passionate software engineer. I develop web applications, mobile apps, and desktop applications. My core skill is JavaScript, and I love to work with it. I am a Computer Science graduate from Chandigarh University, India.
                </p>
                <div>
                  <button>Get Resume</button>
                  <button>My Skills</button>
                </div>
              </div>
            </div>
          </section>
        );
      };


export default AboutPage;
