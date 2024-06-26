import React from "react";
import SampleMentorImage from "../assets/SampleMentor.webp";

const Mentors = () => {
  return (
    <section
      id="mentors"
      className="select-none bg-gradient-to-b from-transparent via-[#101114] to-transparent py-18 md:py-24 py-[100px] bg-[#FC921B]"
    >
      <div className="relative h-[40vh] md:h-[50vh] w-full flex justify-center items-center">
        <h2 className="container mx-auto mb-[60px] max-w-6xl text-center text-[25px] font-bold md:text-5xl lg:text-7xl text-white">
          Connect with senior engineering mentors and get actionable insights
        </h2>
        {/* <div className="container hidden flex gap-2 overflow-x-auto  md:grid md:grid-cols-3 lg:gap-0 lg:gap-y-20 xl:grid-cols-4 !xl:gap-x-0 px-[100px] lg:px-[100px] xl:px-[180px]">
          {[1].map((d) => (
            <div className="min-w-[200px] lg:min-w-[300px] max-w-xs text-center">
              <div className="relative mx-auto mb-5 w-fit">
                <div className="aspect-[8/9] overflow-hidden rounded-3xl object-cover">
                  <img
                    loading="lazy"
                    src={SampleMentorImage}
                    alt=""
                    className="aspect-[8/9] h-44 object-cover lg:h-60 object-top"
                  />
                </div>
              </div>
              <div className="px-[10px] lg:px-[20px]">
                <h5 className=" lg:mb-2 lg:text-2xl text-black">Deepen Vora</h5>
                <div className="text-xs font-medium text-gray-600 lg:text-md">
                  Senior Designer at PharmEasy, ex-Flipkart, Sony, TOI
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Mentors;
