const About = () => {
  return (
    <>
      <div className="container-fluid" id="about">
        <div className="heading">
          <h3 className="text-center">About Me</h3>
        </div>
        <div className="flex">
          <div className="descriptions">
            <h3>
              Welcome to my portfolio website! I'm thrilled to have this
              opportunity to share a bit about myself and my passion for
              frontend development.
            </h3>
            <p>
              I am a dedicated and creative frontend developer with a love for
              crafting visually appealing and user-friendly websites. With a
              keen eye for design and a strong foundation in coding, I strive to
              create seamless and engaging online experiences.
              <br />
              Thank you for taking the time to visit my portfolio website. I
              hope you enjoy browsing through my projects and getting a glimpse
              of my passion for frontend development.
            </p>
          </div>
          <div className="descriptions about-details">
            <div className="about">
              <span>Name: Simran Kumari</span>
              <span>Phone: +91 8051030096</span>
              <span>Email: thakursimran1207@gmail.com</span>
              <span>Country: India</span>
            </div>
            <div className="social-media">
              <span>
                <a href="https://www.linkedin.com/in/simranthakur07/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="https://github.com/SimranThakur07" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
