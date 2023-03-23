import sliderData from "./sliderData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BiRupee } from "react-icons/bi";

export const CardCarousel = () => {
  //   console.log(sliderData);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          {sliderData.map((item) => {
            return (
              <div
                className="col-4 col-sm-4 border rounded mx-2 py-2 cardWidth"
                key={item.id}
              >
                <div className="cardImg">
                  <figure>
                    <img src={item.imgUrl} alt="img" />
                  </figure>
                  <div className="p-2 cardTitle">
                    <figcaption>{item.title}</figcaption>
                  </div>
                  <div className="p-2 fontsize ">
                    <span className="text-warning me-1">{item.offersec}</span>

                    <s className="text-muted">{item.cutOff}</s>
                    <span className="text-dark">
                      <BiRupee />
                      {item.price}
                    </span>
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
