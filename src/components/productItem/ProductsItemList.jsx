import product from "./productItemList.json";
import { BiRupee } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
export const ProductsItemList = () => {
  return (
    <div className="container">
      {product.map((value) => {
        return (
          <div className="row align-items-center" key={value.id}>
            <div className="col-10">
              <div className="row ">
                <div className="col-4 fanimg">
                  <figure>
                    {" "}
                    <img src={value.imgUrl} alt="fan" />
                  </figure>
                </div>
                <div className="col-8">
                  <div>
                    <b>{value.title}</b>
                  </div>
                  <span className="font-size text-muted">{value.config}</span>
                  <div>
                    <span className="text-warning">{value.offer}</span>
                    <s className="text-muted">{value.cutPrice}</s>
                    <span>
                      <BiRupee />
                    </span>
                    <strong>{value.price}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <span className="bg-lightGray">
                <BsCart2 />
              </span>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
