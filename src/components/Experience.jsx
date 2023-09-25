const Experience = () => {
  return (
    <>
      <div className="container-fluid" id="experience">
        <div className="heading">
          <h3 className="text-center">Experience</h3>
        </div>
        <div className="experience">
          <ul className="experience-section">
            <li>
              <span className="info"> 2023 to Present </span>
              <span>Software Engineer Traniee</span>
              <span>
                <i className="fa-solid fa-circle"></i>
                <div className="line"></div>{" "}
              </span>
              <span>Infotiqq</span>
              <span>Noida, India</span>
              <p>
                Contributed to the successful development of a live application
                by building the frontend using React.js. <br />
                Worked with a team of engineers to design and implement user interfaces that were both
                functional and visually appealing.  <br />
                Optimized the performance of the UI by utilizing React rendering capabilities.
              </p>
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
