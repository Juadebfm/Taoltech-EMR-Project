import { useState } from "react";
import UpQuote from "../assets/UpQuote.png";
import DownQuote from "../assets/downquote.png";
import DoctorTestimonials1 from "../assets/doctor-testimonial.png";
import DoctorTestimonials2 from "../assets/doctor-contact-main.png";
import DoctorTestimonials3 from "../assets/doctors-balck.webp";
import RightArrow from "../assets/arrowright.png";
import LeftArrow from "../assets/arrowleft.png";

function CustomSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "The best EMR platform we've ever used. It has transformed our workflow and improved patient care.",
      image: DoctorTestimonials1,
    },
    {
      text: "This platform has streamlined our processes and made patient data management so much easier!",
      image: DoctorTestimonials2,
    },
    {
      text: "An excellent tool for managing patient information and enhancing workflow efficiency.",
      image: DoctorTestimonials3,
    },
  ];

  const handleArrowClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
      return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full h-max p-24 bg-[#F0F5FE] overflow-hidden">
      <img
        src={LeftArrow}
        alt="Left Arrow"
        className="absolute left-8 cursor-pointer w-[60px] h-[60px] z-10"
        onClick={() => handleArrowClick("left")}
      />

      <div className="w-full p-8 mx-8 bg-transparent rounded-lg">
        <h2 className="mb-6 text-subheading capitalize font-bold text-primaryColor">
          What People Say
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between w-1/2 pr-4">
            <img src={DownQuote} alt="Down Quote" className="w-12 h-10 mb-4" />
            <p className="text-lg text-gray-700">
              {testimonials[currentIndex].text}
            </p>
            <img
              src={UpQuote}
              alt="Up Quote"
              className="self-end w-12 h-10 mt-4"
            />
          </div>
          <div className="w-1/2 pl-4 flex items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt="Doctor Testimonials"
              className="object-cover w-[436px] h-[408px] rounded-md"
            />
          </div>
        </div>
      </div>

      <img
        src={RightArrow}
        alt="Right Arrow"
        className="absolute right-8 cursor-pointer z-10 w-[60px] h-[60px]"
        onClick={() => handleArrowClick("right")}
      />
    </div>
  );
}

export default CustomSwiper;
