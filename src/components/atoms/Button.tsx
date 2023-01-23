import { Icon } from "@iconify/react";

type TYPEBUTTON = {
  label: string;
  icon?: any;
  full?: boolean;
  transparent?: boolean;
  key?: number;
  classname?: any;
  IconClassname?: any;
};

export const Button = ({
  label,
  icon,
  full,
  key,
  transparent,
  classname,
  IconClassname,
}: TYPEBUTTON) => {
  return (
    <button
      key={key}
      className={`
      ${full && `bg-green`}
      ${icon && `gap-[12px] items-center`}
      ${
        transparent &&
        `hover:bg-transLightGrey active:bg-transLightGreyActive active:text-lightGrey`
      }
      ${classname}
          py-[12px] text-[20px] px-[24px] rounded-lg flex hover:text-green duration-150
        `}
    >
      <Icon icon={icon} className={`${IconClassname} w-[20px] h-[20px]`} />
      {label}
    </button>
  );
};
