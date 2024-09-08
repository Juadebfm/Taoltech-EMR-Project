import React from "react";

type Props = {
  className?: string;
  cardText: string;
  cardTitle: string;
  cardImg: string;
};

function FeaturesCard({ className = "", cardText, cardTitle, cardImg }: Props) {
  return (
    <div
      className={`${className} border border-black/20 w-[280px] cursor-pointer hover:shadow-lg transition-all duration-150 h-[450px] px-8 py-14 flex flex-col items-center justify-between rounded-md`}
    >
      <img src={cardImg} alt="" className="w-[164px]" />
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2 font-bold text-cardheading text-center">
          {cardTitle}
        </h3>
        <p className="text-center font-extralight text-[15px] w-[80%]">
          {cardText}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;
