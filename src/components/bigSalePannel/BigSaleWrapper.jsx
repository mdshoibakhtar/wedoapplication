import bigSale from "../assests/images/offerbanner.jpg";
export const BigSlaeWrapper = () => {
  return (
    <div className=" container p-0">
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
