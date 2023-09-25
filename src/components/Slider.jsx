import { Link } from "react-router-dom";
import pdf from "../assets/Simran_Kumari.pdf";
import img from "../assets/develper.png";

const Slider = () => {
  return (
    <>
      <div className="card flex-wrap" id="home">
  <div className="card-body banner">
   <div className="description">
    <h1><span>Hi, there</span> <br /> I am <span>Simran</span></h1>
    <h3>I am a frontend developer</h3>
    <div className="buttons">
      <a href={pdf} download>Resume</a>
      <Link to="#contact">Contact</Link>
    </div>
   </div>
   <div className="description-img">
      <img src={img} alt="" />
   </div>
  </div>
</div>
    </>
  );
};

export default Slider;
