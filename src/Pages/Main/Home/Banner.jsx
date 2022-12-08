import React from "react";
import Lottie from "lottie-react";
import blogging from "../../../Assets/Icon/Blogging.json";
import mountain from "../../../Assets/mountain.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8b249] to-[#b18440] min-h-[600px] mt-7">
        <div className="text-center py-24 flex flex-col justify-center">
          <h1 className="text-7xl satisfy">Thoughts, stories and ideas</h1>
          <p className="text-lg my-10">
            Arate is Ghost theme with a sleek and modern design for a personal{" "}
            <br />
            fashion or lifestyle blog, an online journal or a magazine.
          </p>
        </div>
        <div className="flex justify-end -mt-60">
          <Lottie animationData={blogging} className="w-[600px] h-[450px]" />
        </div>
      </div>

      <div className="min-h-[400px] w-[1000px] bg-secondary -mt-60 ml-16 relative">
        <div className="relative">
          <img
            src={mountain}
            alt=""
            className="h-96 absolute -top-24 left-10"
          />
        </div>
        <div>
          <h1 className="text-4xl w-[510px] absolute left-96 top-32 text-center">
            The sky perfectly blended into the landscape
          </h1>

          <p className="absolute -bottom-2 p-10">
            Et harum quidem rerum facilis est et expedita distinctio. Ut
            proverbia non nulla veriora sint quam vestra dogmata. Si sapiens, ne
            tum quidem miser, cum ab Oroete, praetore Darei, in crucem actus
            est. Tum ille timide vel potius verecunde: Facio, inquit. Quae
            similitudo in genere etiam humano apparet. Quo plebiscito decreta a
            senatu est consuli...
          </p>

          <button className="absolute right-2 top-2 border-2 border-black px-7 py-2 rounded-full hover:bg-primary hover:text-white hover:border-none transition-all duration-300">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
