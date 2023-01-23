import { useState } from "react";

import { Icon } from "@iconify/react";

type TYPECARD = {
  img: any;
  title: string;
  key: number;
  icon: any;
};

export const Card = ({ img, title, key, icon }: TYPECARD) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={key}
      className={`col-span-4 hover:shadow-lg p-[24px] overflow-hidden duration-150 bg-white cursor-pointer rounded-2xl`}
    >
      <img src={img} alt={title + `Image`} className="rounded-2xl" />
      <div className="text-[18px] mt-[12px] text-darkGrey flex items-center justify-center gap-[12px]">
        <Icon icon={icon} className="w-[25px] h-[25px]" />
        <h4 className="font-bold">{title}</h4>
      </div>
    </div>
  );
};
