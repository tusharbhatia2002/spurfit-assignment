import React from 'react'

const Sidebar = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-24 h-[800px]">
        <div className="absolute top-[0px] left-[0px] w-24 h-screen bg-[url('/elements--menu@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute h-[2.6%] w-[27.08%] top-[90.9%] right-[36.46%] bottom-[3.5%] left-[36.46%] max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
            alt=""
            src="/icon-8@2x.png"
          />
          <div className="absolute top-[105px] left-[35px] flex flex-col items-start justify-start gap-[48px]">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/icons--home@2x.png"
            />
            <img
              className="relative w-6 h-6 object-cover opacity-[0.75]"
              alt=""
              src="/icons--message--circle@2x.png"
            />
            <img
              className="relative w-6 h-6 object-cover opacity-[0.75]"
              alt=""
              src="/icons--briefcase@2x.png"
            />
            <img
              className="relative w-6 h-6 object-cover opacity-[0.75]"
              alt=""
              src="/icons--file--text@2x.png"
            />
          </div>
          <img
            className="absolute h-[0.1%] w-[72.92%] top-[7.7%] right-[13.54%] bottom-[92.2%] left-[13.54%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/line@2x.png"
          />
          <div className="absolute h-[3.6%] w-[37.5%] top-[2.1%] right-[31.25%] bottom-[94.3%] left-[31.25%] flex items-center justify-center">
            <img
              className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.444)]"
              alt=""
              src="/logo@2x.png"
            />
          </div>
        </div>
      </div>
  )
}

export default Sidebar