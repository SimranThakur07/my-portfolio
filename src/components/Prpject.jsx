import { Link } from "react-router-dom";
import img1 from "../assets/feane.png";
import img2 from "../assets/ecommerce.jpg";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Link to='#slider'>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        </Link>
        <Link  to='#slider'>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        </Link>
        <Link  to='#slider'>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        </Link>
       
      </Swiper>
        </div>
      </div>
    </>
  )
}

export default Prpject