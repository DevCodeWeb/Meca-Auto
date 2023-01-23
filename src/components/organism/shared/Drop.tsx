// React Tools
import { useEffect, useState } from "react";

// Eva Icons
import { Icon } from "@iconify/react";
// import carIcon from "@iconify/icons-bxs/car";
// import toolsWrench from "@iconify/icons-material-symbols/tools-wrench";
// import locationFilled from "@iconify/icons-carbon/location-filled";
// import phoneFilled from "@iconify/icons-carbon/phone-filled";

export const DropMobile = () => {
  const [scroll, setScroll] = useState();

  return (
    <div className="bg-white w-[200px] h-screen rounded-l-xl duration-300 flex flex-col items-center justify-center gap-[20px]">
      <a href="#services">
        <div
          className={`${
            scroll ? " hover:text-darkGrey" : "hover:text-white"
          } text-green flex items-center rounded-md hover:gap-[5px] gap-[10px] duration-300 cursor-pointer`}
        >
          {/* <Icon icon={toolsWrench} className="w-[20px] h-[20px]" /> */}
          <h3 className="text-lg font-bold">Services</h3>
        </div>
      </a>
      <a href="#cars">
        <div
          className={`${
            scroll ? " hover:text-darkGrey" : "hover:text-white"
          } text-green flex items-center rounded-md hover:gap-[5px] gap-[10px] duration-300 cursor-pointer`}
        >
          {/* <Icon icon={carIcon} className="w-[20px] h-[20px]" /> */}
          <h3 className="text-lg font-bold">Voitures</h3>
        </div>
      </a>
      <a href="#adress">
        <div
          className={`${
            scroll ? " hover:text-darkGrey" : "hover:text-white"
          } text-green flex items-center rounded-md hover:gap-[5px] gap-[10px] duration-300 cursor-pointer`}
        >
          {/* <Icon icon={locationFilled} className="w-[20px] h-[20px]" /> */}
          <h3 className="text-lg font-bold">Adresse</h3>
        </div>
      </a>
      <a href="#contact">
        <div
          className={`${
            scroll ? " hover:text-darkGrey" : "hover:text-white"
          } text-green flex items-center rounded-md hover:gap-[5px] gap-[10px] duration-300 cursor-pointer`}
        >
          {/* <Icon icon={phoneFilled} className="w-[20px] h-[20px]" /> */}
          <h3 className="text-lg font-bold">Contact</h3>
        </div>
      </a>
    </div>
  );
};
