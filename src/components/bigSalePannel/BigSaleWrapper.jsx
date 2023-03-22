import bigSale from "../assests/images/offerbanner.jpg";
export const BigSlaeWrapper = () => {
  return (
    <div className=" container">
      <div className="row">
        <div className="col">
          <div className="bigSlePannel">
            <img src={bigSale} alt="bigSale" />
          </div>
        </div>
      </div>
    </div>
  );
};
