import { BsChevronRight } from "react-icons/bs";
export const ProductsCards = () => {
  return (
    <div className="container-fluid justify-content-between align-items-center">
      <div className="row">
        <div className="col-6">
          <h6 className="m-0">Suggest for you</h6>
        </div>
        <div className="col-6">
          <ul className="list-unstyled m-0 p-0 unlist text-end font-size">
            <li>
              <span>View All</span>
              <span>
                <BsChevronRight />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
