import React from "react";
import banner from "../../../public/banner.png";
import colors from "../../../public/colors.png";
import Typed from "typed.js";

const Banner = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Cars Toy", "Trucks Toy", "Police Cars Toy"],
      typeSpeed: 50,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-[80vh] my-5 flex flex-col mx-auto items-center w-11/12 md:flex-row gap-28  relative">
      <div className="text-center md:text-left">
      
        <div className="flex gap-2 md:justify-start justify-center ">
        <p className="text-2xl font-bold">We Have</p>
        <div className="App text-2xl font-bold text-pink-400 text-center">
          <span ref={el} />
        </div>
        </div>
        <p className=" md:w-2/4 mt-5">Cars toys have long been a beloved playtime companion for children of all ages. These miniature replicas of real cars ignite the imagination and provide hours of entertainment.  </p>
      </div>
      <div>
        <img
          src={banner}
          alt=""
          className="car left-6 md:w-6/12 absolute md:bottom-0 md:right-0"
        />
        <img
          src={colors}
          alt=""
          className="color left-6 absolute bottom-0 md:right-12 -z-10 md:w-3/6"
        />
      </div>
    </div>
  );
};

export default Banner;
