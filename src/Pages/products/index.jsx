import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between p-2  align-items-center fw-bold ">
            <span>
              <Link className="leftCheron">
                <BiChevronLeft />
              </Link>
            </span>
            <span>Products</span>
            <span className="">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="d-flex border py-2 px-3 rounded-2">
          <div className="col-md-10 w-100">
            <input
              type="text"
              placeholder="search here .."
              className="border-0  outlineserchI h-30 w-100"
            />
          </div>
          <div className="col-md-2">
            <span>
              <HiOutlineSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
