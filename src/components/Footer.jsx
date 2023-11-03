import img from "../assets/develper.png";

const Footer = () => {
  return (
    <>
    <footer>
        <div className="box1">
          <h3>Simran</h3>
         
        </div>
        <div className="box">
          <img src={img} alt="" />
        <p>Coding is not about typing; it is about thinking and solving problems.</p>
        </div>
        <div className="box2">
          <h5>Links</h5>
        <div className="social-media">
        <span>
                <a href="https://www.linkedin.com/in/simranthakur07/" target="_blank" rel="noreferrer" className="socialContainer containerOne">
                  <i className="fa-brands fa-linkedin socialSvg"></i>
                </a>
              </span>
              <span>
                <a href="https://github.com/SimranThakur07" target="_blank" rel="noreferrer" className="socialContainer containerTwo">
                  <i className="fa-brands fa-github socialSvg"></i>
                </a>
              </span>
              <span>
                <a href="" target="_blank" rel="noreferrer" className="socialContainer containerThree"> 
                  <i className="fa-brands fa-instagram socialSvg"></i>
                </a>
              </span>
              <span>
                <a href="" target="_blank" rel="noreferrer" className="socialContainer containerFour">
                  <i className="fa-solid fa-globe socialSvg"></i>
                </a>
              </span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer