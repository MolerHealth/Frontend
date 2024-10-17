import React from "react";

function Footer() {
  return (
    <div className="w-full h-[959px] flex justify-center">
      <div className="w-[1440px] h-full flex items-center flex-col mt-[5rem]">
        <div className="w-[1182px] h-[378px] flex gap-[8rem]">
          <div className="w-full flex">
            <div className="w-1/4">
              <div className="text-[#000000] font-mona font-[700] text-[2rem]">
                Moler Health
              </div>
            </div>
            <div className="w-3/4 flex">
              <div className="w-1/3">
                <div className="text-[#4169E1] font-[700] text-[1.25rem]">
                  Company
                </div>
                <ul className="font-mona font-[300] text-[1.75rem] leading-[41.83px]">
                  <li>Features</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of Service</li>
                  <div>User Agreement</div>
                  <div>Community</div>
                  <div>Guidelines</div>
                </ul>
              </div>
              <div className="w-1/3">
                <div className="text-[#4169E1] font-[700] text-[1.25rem]">
                  Community & Support
                </div>
                <ul className="font-mona font-[300] text-[1.75rem] leading-[41.83px]">
                  <li>Get Involved</li>
                  <li>Documentation</li>
                  <li>Contact Us</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="w-1/3">
                <div className="text-[#4169E1] font-[700] text-[1.25rem]">
                  Resources
                </div>
                <ul className="font-mona font-[300] text-[1.75rem] leading-[41.83px]">
                  <li>Blog</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex justify-center flex-col items-center gap-[41px]">
          <div>
            <div className="font-[500] text-[40px] font-mona leading-[69.71px]">
              Join Our Newsletter
            </div>
          </div>
          <div className="w-full h-[80px]">
            <input className="w-[75%] h-full shadow-custom1 focus:outline-none px-[2rem] py-[1rem] text-[1.5rem] rounded-l-[9px]" />
            <button className="bg-[#4169E1] w-[25%] h-full rounded-[9px] text-white font-mona text-[1.25rem] font-[700]">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
