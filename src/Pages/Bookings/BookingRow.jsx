import React from "react";

const BookingRow = ({ booking, handleDelete }) => {
  const { _id, date, service, price, img } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            {img ? (
              <img src={img} alt="Avatar Tailwind CSS Component" />
            ) : (
              <img src="https://img.freepik.com/premium-vector/pop-art-style-with-oops-sign-banner-design-vector-illustration_194782-922.jpg?w=740" />
            )}
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{service}</div>
          <div className="text-sm opacity-50"></div>
        </div>
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
