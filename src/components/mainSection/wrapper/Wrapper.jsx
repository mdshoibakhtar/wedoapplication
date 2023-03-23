import Slider from "react-slick";
/*---------------- images import  -------------*/
import car1 from "../../assests/images/car-a.jpg";
import car2 from "../../assests/images/car-c.jpg";
import car3 from "../../assests/images/car-b.jpg";
export const Wrapper = () => {
  const settings = {
    dots: false,
    infinite: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-wrapper " id="carouselHeight">
      <div>
        <Slider {...settings}>
          <div className="cardSlide">
            <img src={car1} alt="car1" />
          </div>
          <div className="cardSlide">
            <img src={car2} alt="car2" />
          </div>
          <div className="cardSlide">
            <img src={car3} alt="car3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
