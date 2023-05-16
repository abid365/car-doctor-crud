import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-7 pt-7">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body flex flex-row items-center justify-between">
        <div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className="font-bold text-orange-500">${price}</p>
        </div>
        <div className="">
          <Link to={`/checkout/${_id}`} className="text-sm font-bold">
            <button className="btn">
              Book Now
              <BsFillArrowRightCircleFill className="text-lg ms-1 mb-1"></BsFillArrowRightCircleFill>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
