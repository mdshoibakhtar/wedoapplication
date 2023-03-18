import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/*---------------- images import  -------------*/
import car1 from "../../assests/images/car-a.jpg";
import car2 from "../../assests/images/car-c.jpg";
import car3 from "../../assests/images/car-b.jpg";
export const Wrapper = () => {
  return (
    <div className="carousel-wrapper " id="carouselHeight">
      <Carousel>
        <div className="cardSlide">
          <img src={car1} alt="car1" />
        </div>
        <div className="cardSlide">
          <img src={car2} alt="car2" />
        </div>
        <div className="cardSlide">
          <img src={car3} alt="car3" />
        </div>
      </Carousel>
    </div>
  );
};
