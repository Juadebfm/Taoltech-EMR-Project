import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FemaleDoctor from "../assets/doctor-female.png";
import BlackDoctor from "../assets/doctors-balck.webp";
import FeaturesCard from "../components/FeaturesCard";
import Scala from "../assets/scalability-img.png";
import Access from "../assets/accessibility-img.png";
import Data from "../assets/datasecurity-img.png";
import Seamless from "../assets/seamless-img.png";
import Usercentric from "../assets/usercentric-img.png";
import DoctorMale from "../assets/doctor-male-coat.png";
import Efficient from "../assets/efficient-healthcare.png";
import Stream from "../assets/streamlined-workflow.png";
import Better from "../assets/better-patient.png";
import Improve from "../assets/improved-accuracy.png";
import Simple from "../assets/our-simple-process.png";
import Signup from "../assets/signup.png";
import Manage from "../assets/manage.png";
import Multi from "../assets/multidevice.png";
import Collaborate from "../assets/collaborate.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomSwiper from "../components/CustomSwiper";

function PageOne() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Div */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-stretch w-full h-[70vh]">
            <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left p-4 h-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 w-[85%] !leading-[1.3]">
                Revolutionizing{" "}
                <span className="text-primaryColor">Hospital</span> Management
                and Patient Care
              </h1>
              <p className="font-extralight w-[45%]">
                Empower Your Healthcare Practice with Our Comprehensive,
                Cloud-Based EMR Platform
              </p>
              <Button buttonText="Get Started" className="mt-[60px]" />
            </div>
            <div className="relative flex-1 flex items-center justify-center p-4">
              <div className="ripple-container relative w-full h-full flex items-center justify-center">
                <div className="sphere sphere1"></div>
                <div className="sphere sphere2"></div>
                <div className="sphere sphere3"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={FemaleDoctor}
                  alt="Female Doctor"
                  className="w-full h-full object-contain z-10 mt-[-80px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* About Us Div */}
        <div className="h-max bg-[#F0F5FE] p-24 flex items-center justify-between gap-24">
          <div className="w-full">
            <img
              src={BlackDoctor}
              alt=""
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div className="w-full">
            <h2 className="text-primaryColor text-subheading capitalize font-bold">
              about us
            </h2>
            <p className="font-light w-[87%]">
              EMR software is a digital version of the traditional paper-based
              medical records system used in healthcare. It is designed to
              store, manage, and retrieve patient health information, including
              medical history, diagnoses, treatments, prescriptions, and test
              results. This software facilitates efficient healthcare delivery
              by enabling quick access to patient data, improving accuracy, and
              streamlining workflow for healthcare providers.
            </p>
            <Button buttonText="Learn More" className="mt-8" />
          </div>
        </div>
        {/* Features */}
        <div className="h-max p-24">
          <div>
            <h2 className="text-primaryColor text-subheading capitalize font-bold">
              key features
            </h2>
            <p className="font-light w-[35%] mt-3">
              The EMR platform is scalable, accessible, and user-centric. It
              ensures fast load times and efficient data processing, supporting
              up to 10,000 users.
            </p>
          </div>
          {/* Features Card */}
          <div className="mt-16 flex items-center justify-start gap-5">
            <FeaturesCard
              cardText="Easily manage patient records as your practice grows."
              cardTitle="Scalability"
              cardImg={Scala}
            />
            <FeaturesCard
              cardText="Access patient data from anywhere, at any time."
              cardTitle="Accessibility"
              cardImg={Access}
            />
            <FeaturesCard
              cardText="Ensure the highest level of data protection and privacy."
              cardTitle="Data Security"
              cardImg={Data}
            />
            <FeaturesCard
              cardText="Facilitate communication among healthcare providers."
              cardTitle="Seamless Communication"
              cardImg={Seamless}
            />
            <FeaturesCard
              cardText="Intuitive interface designed for healthcare professionals."
              cardTitle="User-Centric Design"
              cardImg={Usercentric}
            />
          </div>
          {/* Why Choose */}
          <div className="mt-20">
            <h2 className="text-primaryColor text-subheading capitalize font-bold text-center">
              Why Choose Our EMR Platform?
            </h2>
            <p className="font-extralight w-[55%] mt-3 text-center mx-auto">
              Our EMR platform combines advanced technology with an easy-to-use
              interface, ensuring secure, scalable performance. It reduces
              administrative burdens and boosts clinical efficiency, allowing
              your team to focus on delivering excellent patient care.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-3 place-items-center gap-10">
            <div className="space-y-16">
              <div>
                <div className="flex items-center justify-start gap-5">
                  <img src={Efficient} alt="" className="w-[60px] h-[60px]" />
                  <h3 className="font-medium text-cardheading text-center">
                    Efficient Healthcare Delivery
                  </h3>
                </div>
                <p className="font-extralight w-[80%] mt-2">
                  Enables healthcare providers to retrieve patient information
                  swiftly, allowing for faster diagnosis and treatment.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-start gap-5">
                  <img src={Improve} alt="" className="w-[60px] h-[60px]" />
                  <h3 className="font-medium text-cardheading text-center">
                    Improved Accuracy
                  </h3>
                </div>
                <p className="font-extralight w-[80%] mt-2">
                  Enables healthcare providers to retrieve patient information
                  swiftly, allowing for faster diagnosis and treatment.
                </p>
              </div>
            </div>
            <div>
              <img src={DoctorMale} alt="" />
            </div>
            <div className="space-y-16">
              <div>
                <div className="flex items-center justify-start gap-5">
                  <img src={Stream} alt="" className="w-[60px] h-[60px]" />
                  <h3 className="font-medium text-cardheading text-center">
                    Streamlined Workflow
                  </h3>
                </div>
                <p className="font-extralight w-[80%] mt-2">
                  Automated processes and efficient data management save time
                  and enhance productivity for healthcare providers
                </p>
              </div>
              <div>
                <div className="flex items-center justify-start gap-5">
                  <img src={Better} alt="" />
                  <h3 className="font-medium text-cardheading text-center">
                    Better Patient Outcomes
                  </h3>
                </div>
                <p className="font-extralight w-[80%] mt-2">
                  Provides comprehensive patient information, enabling
                  healthcare providers to deliver more personalized and
                  effective treatments
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black w-full h-[10px] mx-auto" />
        </div>
        {/* Simple Process */}
        <div className="grid grid-cols-2 h-max p-24">
          <div>
            <img src={Simple} alt="" />
          </div>
          <div className="h-full">
            <VerticalTimeline lineColor="#17263F" layout="1-column-left">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "transparent",
                  color: "#000",
                }}
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={""}
              >
                <h3 className="vertical-timeline-element-title font-bold text-cardheading flex items-center justify-start gap-3">
                  <img src={Signup} alt="" className="w-[35px] h-[35px]" />
                  <span>Sign Up</span>
                </h3>
                <p className="font-extralight w-[70%]">
                  Create an Account, begin by registering for our platform using
                  your email address and basic practice information.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={""}
              >
                <h3 className="vertical-timeline-element-title font-bold text-cardheading flex items-center justify-start gap-3">
                  <img src={Manage} alt="" className="w-[35px] h-[35px]" />
                  <span>Manage Records</span>
                </h3>
                <p className="font-extralight w-[70%]">
                  Digitally record and store comprehensive patient health data,
                  including medical history, diagnoses,& treatments.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={""}
              >
                <h3 className="vertical-timeline-element-title font-bold text-cardheading flex items-center justify-start gap-3">
                  <img src={Multi} alt="" className="w-[35px] h-[35px]" />
                  <span>Multi-Device Access</span>
                </h3>
                <p className="font-extralight w-[70%]">
                  Access patient data from any device, whether it’s a desktop
                  computer, laptop, tablet, or smartphone.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={""}
              >
                <h3 className="vertical-timeline-element-title font-bold text-cardheading flex items-center justify-start gap-3">
                  <img src={Collaborate} alt="" className="w-[35px] h-[35px]" />
                  <span>Collaborate</span>
                </h3>
                <p className="font-extralight w-[70%]">
                  Share patient records and collaborate with other healthcare
                  providers within and outside your practice
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
        {/* Testimonial */}
        <CustomSwiper />
        {/* CTA */}
      </main>
    </div>
  );
}

export default PageOne;
