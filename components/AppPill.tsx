import React from "react";
import cx from "classnames";
interface pill_props {
  children: string;
  size: string;
  textColor?: any;
  classNames?: string;
  status: string;
}
const AppPill = ({
  children,
  size = "normal",
  textColor,
  classNames,
  status,
}: pill_props) => {
  const className = `text-${textColor} ${classNames}`;

  return (
    <div
      className={cx(
        ` py-1.5 rounded-full font-semibold text-center flex justify-center items-center`,
        {
          "text-sm": size === "sm",
          "text-xl": size === "lg",
          "bg-red-300 text-red-800": status == "failed",
          "bg-[#FEFCC0] text-amber-900": status == "waiting",
          "bg-[#C6F6D5] text-green-900": status == "paid",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default AppPill;
