import { Link } from "react-router-dom";
import img1 from "../assets/feane.png";
import img2 from "../assets/ecommerce.jpg";
import img3 from "../assets/port.png";
import { Navigation, FreeMode, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Prpject = () => {
  return (
    <>
     <div className="container-fluid" id="project">
        <div className="heading">
          <h3 className="text-center">Projects</h3>
        </div>
        <div className="projects">
        <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          // When window width is >= 640px
          640: {
             slidesPerView: 1,
             spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
             slidesPerView: 2,
             spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
             slidesPerView: 4,
             spaceBetween: 20,
          },
       }}
      >
        <SwiperSlide>
          <div className="project-card">
        <Link >
          <img src={img1} alt="" />
        </Link>
        <div className="project-desp">
          <Link to='https://github.com/SimranThakur07/Food-Delivery-App' target="_blank">Food Delivery <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-card">
        <Link  >
          <img src={img2} alt="" />
        </Link>
        <div className="project-desp">
          <Link to='https://github.com/SimranThakur07/Ecommerce' target="_blank">E-Commerce <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
        <Link  to='#slider'>
          <img src={img3} alt="" />
        </Link>
        <div className="project-desp">
          <Link>My Portfolio <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
        <Link >
          <img src={img1} alt="" />
        </Link>
        <div className="project-desp">
          <Link to='https://github.com/SimranThakur07/Food-Delivery-App' target="_blank">Food Delivery <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </>
  )
}

export default Prpject