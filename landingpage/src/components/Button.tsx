import React from "react";

type Props = {
  className?: string;
  buttonText: string;
  func?: () => void;
};

function Button({ className = "", buttonText, func }: Props) {
  return (
    <div
      className={`${className} bg-primaryColor w-[190px] h-[50px] flex items-center justify-center rounded-[8px] font-montserrat text-white cursor-pointer hover:shadow-lg transition-all ease-linear duration-150`}
      onClick={func}
    >
      {buttonText}
    </div>
  );
}

export default Button;
