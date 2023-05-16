import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mt-4">
        <h1 className="text-center my-3 text-orange-600 font-bold">Services</h1>
        <h1 className="text-center text-4xl font-extrabold my-3">
          Our Service Area
        </h1>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised<br></br> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
