import sliderData from "./sliderData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const CardCarousel = () => {
  //   console.log(sliderData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          {sliderData.map((item) => {
            console.log(item);
            return (
              <div className="col-4 col-sm-4 border rounded mx-2 py-2">
                <div className="cardImg">
                  <figure>
                    <img src={item.imgUrl} alt="img" />
                  </figure>
                  <div className="p-2 cardTitle">
                    <figcaption>{item.title}</figcaption>
                  </div>
                  <div className="p-2 ">
                    <span>{item.offersec}</span>
                    <s>{item.cutOff}</s>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
