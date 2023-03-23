import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footsec = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-around p-2 footFontSize text-center">
              <div className="">
                <Link>
                  <AiOutlineHome />
                </Link>
                <div className="font-size">Home</div>
              </div>
              <div className="">
                <Link>
                  <BiCategory />
                </Link>
                <div className="font-size">Categories</div>
              </div>
              <div className="">
                <Link>
                  <FaRegUser />
                </Link>
                <div className="font-size">Account</div>
              </div>
              <div className="">
                <Link>
                  <BsCart3 />
                </Link>
                <div className="font-size">Cart</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
