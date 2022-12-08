import React from "react";
import Lottie from "lottie-react";
import blogging from "@/Assets/Icon/Blogging.json";
import mountain from "@/Assets/cloud.jpg";

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

      <div className="min-h-[400px] w-[1000px] bg-white/95 -mt-60 ml-16 shadow-2xl rounded-md overflow-hidden">
        <div className="flex">
          <img src={mountain} alt="" className="h-80" />
          <p className=" p-3 w-6/12">
            Odium autem et invidiam facile vitabis. Traditur, inquit, ab Epicuro
            ratio neglegendi doloris. Quamquam te quidem video esse deterritum.
            Atqui eorum nihil est eius generis, ut sit in fine atque extrerno
            bonorum. Modo etiam paulum ad de via declinavi, ut ad Pericli
            sepulcrum accederem. Si stante, hoc natura videlicet vult, salvam
            esse se, quod ihi enim satis est, ipsis non satis. Qui-vere falsone,
            quaerere mittimus-dicitur oculis se privasse. Quantum ingenium
            consumptum videmus in musicis? Mihi enim satis est, ipsis non satis.
            His enim rebus detractis negat se, Traditur, inquit, ab Epicuro
            ratio neglegendi doloris mini quidem video minime esse deterritum.
            Atqui eorum nihil est eius generis, ut sit in fine atque extrerno
            bonorum. Modo etiam paulum ad dexteram de via declinavi....
            <button className="ml-3">Read More...</button>
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-center py-2 uppercase">
            The sky perfectly blended into the landscape
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
