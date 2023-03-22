import productData from "./productData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const ProductCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col">
          <Slider {...settings}>
            {productData.map((item) => {
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
                      <figcaption className="text-secondary text-center">
                        {item.title}
                      </figcaption>
                    </div>
                    <div className="p-1 ">
                      <b>{item.price}</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <hr />
    </div>
  );
};
