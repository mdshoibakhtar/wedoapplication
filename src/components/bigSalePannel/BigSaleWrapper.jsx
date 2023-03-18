import bigSale from "../assests/images/big-sale.webp";
export const BigSlaeWrapper = () => {
  return (
    <div className=" container-fluid p-0">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="bigSlePannel">
            <img src={bigSale} alt="bigSale" />
          </div>
        </div>
      </div>
    </div>
  );
};
