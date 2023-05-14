import React from "react";
import img1 from "../../../src/assets/images/banner/1.jpg";
import img2 from "../../../src/assets/images/banner/2.jpg";
import img3 from "../../../src/assets/images/banner/3.jpg";
import img4 from "../../../src/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg h-[500px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="w-1/2 space-y-7 pl-4">
            <h1 className="text-white font-bold text-6xl w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <p className="mt-5 text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-primary m-2">Discover More</button>
              <button className="btn m-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="w-1/2 space-y-7 pl-4">
            <h1 className="text-white font-bold text-6xl w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <p className="mt-5 text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-primary m-2">Discover More</button>
              <button className="btn m-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="w-1/2 space-y-7 pl-4">
            <h1 className="text-white font-bold text-6xl w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <p className="mt-5 text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-primary m-2">Discover More</button>
              <button className="btn m-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="w-1/2 space-y-7 pl-4">
            <h1 className="text-white font-bold text-6xl w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <p className="mt-5 text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-primary m-2">Discover More</button>
              <button className="btn m-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
