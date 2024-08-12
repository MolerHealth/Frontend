import React from "react";

function ContactUsPage() {
  return (
    <div className="w-full h-[649px] flex justify-center">
      <div className="w-[1440px] h-full flex justify-center items-center">
        <div className="w-[1169px] h-[454px] flex flex-col justify-between">
          <div className="font-[700] font-mona text-[36px] leading-[34.81px] text-[#4169E1]">
            We are Open Source
          </div>
          <div className="font-[350px] text-[24px] font-Niramala leading-[40.8px]">
            MolerHealth is an innovative initiative striving to revolutionize
            healthcare in Nigeria through an open-source Electronic Health
            Records (EHR) application. Our vision is a future marked by
            accessible and accurate healthcare, addressing the critical issue of
            disease misdiagnosis. We empower individuals with a secure platform
            for comprehensive health record management, ensuring continuity of
            care. By equipping healthcare providers with accurate patient
            profiles and fostering collaboration through secure messaging,
            MolerHealth aims to reduce misdiagnoses, drive innovation, and build
            a community-centric healthcare ecosystem. Join us in transforming
            healthcare and creating a healthier future for all.
          </div>
          <button className="w-[225px] h-[59px] rounded-[7px] text-white font-[500] font-mona text-[20px] leading-[34px] bg-[#26BF47] ">
            Contact us now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
