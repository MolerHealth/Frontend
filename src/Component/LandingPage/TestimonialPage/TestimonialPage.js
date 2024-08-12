import React from "react";
import TestimonyOne from "../../../Assets/testimony1.png";
import TestimonyTwo from "../../../Assets/testimony2.png";
import TestimonyThree from "../../../Assets/testimony3.png";

function TestimonialPage() {
  return (
    <div className="w-full h-[1408px] flex justify-center bg-[#B0C6B512]/[7%]">
      <div className="w-[90rem] h-[full] flex flex-col justify-between my-[70px] py-[1.5rem] gap-[3rem]">
        <div className="w-full flex flex-col gap-[1rem] items-center">
          <div className="w-[1200px] font-[700] font-mona text-[36px] leading-[38.29px] h-fit text-[#4169E1]">
            Testimonials
          </div>
          <div className="w-[1200px] font-[600] font-mona text-[32px] leading-[34.04px] ">
            We are Trusted Across Africa
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-center gap-[2rem]">
          <div className="w-[1200px] h-1/3 p-[1.5rem] flex flex-col gap-[1rem] bg-white">
            <img
              className="rounded-[50%] size-[100px] bg-white"
              src={TestimonyOne}
              alt="Testimony One"
            />

            <div className="text-[#4169E1] font-mona font-[700] text-[32px] leading-[42.6px]">
              Tyler imeh
            </div>
            <div className="font-[400] font-Niramala text-[24px] leading-[31.95px] text-[#1F1F1F]">
              Discovering Molerhealth has been life-changing. The detailed
              reports and personalized insights have empowered me to take
              control of my health like never before. It's not just a record
              system; it's my proactive health ally. Highly recommended!"
            </div>
          </div>
          <div className="w-[1200px] h-1/3 p-[1.5rem] flex flex-col gap-[1rem] bg-white">
            <img className="size-[100px] bg-white" src={TestimonyTwo} />
            <div className="text-[#4169E1] font-mona font-[700] text-[32px] leading-[42.6px]">
              Susan Thompson
            </div>
            <div className="font-[400] font-Niramala text-[24px] leading-[31.95px] text-[#1F1F1F]">
              "The secure messaging feature on MolerHealth has transformed how
              our healthcare team communicates. It's efficient, secure, and has
              greatly improved the coordination of patient care. A vital tool
              for modern healthcare practices."
            </div>
          </div>

          <div className="w-[1200px] h-1/3 p-[1.5rem] flex flex-col gap-[1rem] bg-white">
            <img className="size-[100px] bg-white" src={TestimonyThree} />
            <div className="text-[#4169E1] font-mona font-[700] text-[32px] leading-[42.6px]">
              Nathan Saliu
            </div>
            <div className="font-[400] font-Niramala text-[24px] leading-[31.95px] text-[#1F1F1F]">
              "The secure messaging feature on MolerHealth has transformed how
              our healthcare team communicates. It's efficient, secure, and has
              greatly improved the coordination of patient care. A vital tool
              for modern healthcare practices."
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[1200px] h-[76px]">
            <button className="bg-[#4169E1] w-[318px] h-[76px] rounded-[7px] text-white font-[700] text-[24px] leading-[40.8px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage;
