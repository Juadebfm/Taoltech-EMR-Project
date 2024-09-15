import React, { useState } from "react";
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
import DoctorContact from "../assets/doctor-contact-main.png";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomSwiper from "../components/CustomSwiper";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

function PageOne() {
  const [selected, setSelected] = useState("US");

  const countryCodes = ["US", "GB", "FR", "DE", "IT", "NG", "CA", "IN"];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Div */}
        <div className="mx-auto px-[25px] sm:px-20 py-8">
          <div className="flex flex-col sm:flex-row items-stretch w-full h-max sm:h-[70vh]">
            <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left p-4 h-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 w-[95%] !leading-[1.3]">
                Revolutionizing{" "}
                <span className="text-primaryColor">Hospital</span> Management
                and Patient Care
              </h1>
              <p className="font-extralight sm:w-[55%]">
                Empower Your Healthcare Practice with Our Comprehensive,
                Cloud-Based EMR Platform
              </p>
              <Button buttonText="Get Started" className="mt-[60px]" />
            </div>
            <div className="hidden relative flex-1 sm:flex items-center justify-center p-4">
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
        <div className="h-max bg-[#F0F5FE] p-[25px] sm:p-24 flex flex-col sm:flex-row items-center justify-between gap-16 sm:gap-24">
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
            <p className="font-light w-full sm:w-[87%]">
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
        <div className="h-max p-[25px] sm:p-24">
          <div>
            <h2 className="text-primaryColor text-subheading capitalize font-bold">
              key features
            </h2>
            <p className="font-light w-full sm:w-[35%] mt-3">
              The EMR platform is scalable, accessible, and user-centric. It
              ensures fast load times and efficient data processing, supporting
              up to 10,000 users.
            </p>
          </div>
          {/* Features Card */}
          <div className="mt-16 flex flex-col sm:flex-rowitems-center justify-start gap-5">
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
            <p className="font-extralight w-full sm:w-[55%] mt-3 text-center mx-auto">
              Our EMR platform combines advanced technology with an easy-to-use
              interface, ensuring secure, scalable performance. It reduces
              administrative burdens and boosts clinical efficiency, allowing
              your team to focus on delivering excellent patient care.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-10">
            <div className="space-y-16">
              <div>
                <div className="flex items-center justify-start gap-5">
                  <img src={Efficient} alt="" className="w-[60px] h-[60px]" />
                  <h3 className="font-medium text-cardheading text-center">
                    Efficient Healthcare Delivery
                  </h3>
                </div>
                <p className="font-extralight w-full sm:w-[80%] mt-2">
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
                <p className="font-extralight w-full sm:w-[80%] mt-2">
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
                <p className="font-extralight w-full sm:w-[80%] mt-2">
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
                <p className="font-extralight w-full sm:w-[80%] mt-2">
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
        <div className="bg-[#17263F] p-24 flex items-center justify-between">
          <div>
            <h2 className="text-[48px] w-[80%] leading-none text-white">
              Ready to Transform Your Practice?
            </h2>
          </div>
          <Button buttonText="Request A Demo" className="justify-self-start" />
        </div>
        {/* Contact */}
        <div className="p-24 flex items-center justify-between gap-24">
          <div className="w-1/2">
            <img src={DoctorContact} alt="" />
          </div>
          <div className="w-1/2">
            <div className="w-[480px]">
              <div className="bg-[#F0F5FE] p-10 rounded-xl shadow-lg space-y-4">
                {/* Name */}
                <div className="flex items-start justify-center flex-col w-full space-y-2">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="John Doe"
                    className="w-full h-[48px] px-4"
                  />
                </div>
                {/* Email */}
                <div className="flex items-start justify-center flex-col w-full space-y-2">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="johndoe@mail.com"
                    className="w-full h-[48px] px-4"
                  />
                </div>
                {/* Phone */}
                <div className="flex items-start justify-center flex-col w-full space-y-2">
                  <label htmlFor="Phone">Phone</label>
                  <div className="flex items-center w-full h-[48px] bg-white px-4">
                    {/* <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      countries={countryCodes}
                      customLabels={{
                        US: "+1",
                        GB: "+44",
                        FR: "+33",
                        DE: "+49",
                        IT: "+39",
                        NG: "+234",
                        CA: "+1",
                        IN: "+91",
                      }}
                      placeholder="Select Code"
                      searchable
                      className="menu-flags w-max border-none"
                      selectButtonClassName="menu-flags-button"
                    /> */}
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="flex items-start justify-center flex-col w-full space-y-2">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full"
                  />
                </div>

                {/* Check */}
                <div className="flex items-center justify-center w-full gap-3">
                  <input type="checkbox" className="" />
                  <span>You agree to our friendly privacy policy.</span>
                </div>
              </div>
              <Button buttonText="Send Message" className="w-full mt-8" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#17263F] px-24 py-12 text-white">
        {/* Top Content */}
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="w-full">
            <div className="w-[447px]">
              <span className="font-bold w-[33.3%] text-cardheading">Logo</span>
              <p className="mt-5">
                Discover our dedication to transforming healthcare with
                innovative technology. Learn about our journey and how our EMR
                platform is designed to meet the needs of modern healthcare
                providers.
              </p>
            </div>
          </div>
          <ul className="flex items-center justify-end gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {/* Mid Content */}
        <div className="mt-14 flex items-center justify-between">
          <p>Subscribe to our newletter</p>
          <div className="border rounded-lg p-4 border-white/70 w-[393px] h-[73px] relative flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="ring-0 border-none bg-transparent"
            />
            <Button
              buttonText="Subscribe"
              className="w-[130px] h-[49px] absolute right-4"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaFacebookF size={25} />
            <TiSocialTwitter size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
        {/* Sub Script */}
        <div></div>
      </footer>
    </div>
  );
}

export default PageOne;
