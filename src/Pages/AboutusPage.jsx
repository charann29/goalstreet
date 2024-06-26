import React from "react";
import AboutusPic from '../assets/AboutUs.jpeg'
const AboutusPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col gap-[20px] py-[5rem] lg:flex-row   text-white">
        {" "}
        <img
          className=" lg:w-[50%] object-cover aspect-square "
          src={AboutusPic}
          alt=""
        />{" "}
        <div className="bg-[#E5611A] p-[20px] md:p-[32px] lg:p-[64px] rounded-[20px] space-y-[20px] lg:w-fit lg:flex lg:flex-col lg:justify-center">
          {" "}
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-[40px]">
            About Us
          </h1>{" "}
          <p>
            At GoalStreet, we believe in empowering students to unlock their
            full potential and embark on successful career journeys. We
            understand that internships play a pivotal role in shaping career
            paths, and our platform is designed to connect students with
            valuable internship opportunities that align with their aspirations
            and academic pursuits.
            {<br />}
            {<br />}
            Our mission at GoalStreet is simple yet profound: to bridge the gap
            between education and professional experience by providing students
            with meaningful internship opportunities. We strive to facilitate
            connections between ambitious students and reputable organizations,
            fostering a mutually beneficial relationship where both parties can
            learn and grow.
          </p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutusPage;
