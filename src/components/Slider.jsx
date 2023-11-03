import { Link } from "react-router-dom";
import pdf from "../assets/Simran_Kumari.pdf";
import img from "../assets/develper.png";

const Slider = () => {
  return (
    <>
      <div className="card flex-wrap" id="home">
  <div className="card-body banner">
   <div className="description">
    <h1><span>Hi, there</span> <br /> I am 
  <svg width="350px" height="80px">
 <text x="50%" y="60%"  textAnchor="middle"  >
   Simran
 </text>
 </svg>
    </h1>
    <h3>I am a frontend developer</h3>
    <div className="buttons">
      <a href={pdf} download>Resume</a>
      <Link to="https://simran111.netlify.app/">Contact</Link>
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
