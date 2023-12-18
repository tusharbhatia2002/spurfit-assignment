import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute w-[80.97%] top-[0px] right-[90%] left-[7.64%] h-[77px] pr-0 text-left text-gray mr-0 ">
        <img
          className="absolute w-screen top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[77px] object-contain py-0"
          alt=""
          src="/bg@2x.png"
        />
        
        <div className="absolute top-[calc(50%_-_14.5px)] left-[7.2%] text-[22px] font-medium">
          Home
        </div>
        <div className="absolute h-[50.73%] w-[29.08%] top-[22.83%] right-[35.5%] bottom-[26.44%] left-[35.42%] text-black">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/color@2x.png"
          />
          <div className="absolute top-[8.42px] left-[15px] overflow-hidden flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/icons--search@2x.png"
            />
            <div className="relative leading-[20px] opacity-[0.4] mix-blend-normal">
              Search anything
            </div>
          </div>
        </div>
        <div className="absolute top-[16px] left-[920px] w-[252px] h-11 text-center text-light-foreground-fg-on-color">
          <img
            className="absolute top-[0px] left-[208px] w-11 h-11 object-cover"
            alt=""
            src="/elements--user@2x.png"
          />
          <div className="absolute top-[0px] left-[42px] rounded-81xl [background:linear-gradient(90deg,_#464feb_10.42%,_#8330e9)] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.14),_0px_0px_2px_rgba(0,_0,_0,_0.12)] w-[148px] h-11 flex flex-row items-center justify-start">
            <div className="rounded-81xl w-[148px] h-11 flex flex-row items-center justify-start p-4 box-border gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/chat-sparkle@2x.png"
              />
              <div className="w-[82px] flex flex-row items-start justify-start py-0 pr-0 pl-0 box-border">
                <div className="relative tracking-[-0.43px] leading-[22px] font-medium">
                  Ask Copilot
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[10px] left-[0px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
      </div>
  )
}

export default Navbar