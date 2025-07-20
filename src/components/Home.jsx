import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hi, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Full-Stack Developer", "Programmer","Problem Solver", "Tech Enthusiast"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <br />
            <p className="text-sm md:text-md text-justify">
              I'm <strong>Priti Rathi</strong>, a Computer Engineering student with a passion for building scalable web and mobile applications. With hands-on experience in full-stack development using the MERN stack and Android development using Kotlin and Firebase, I enjoy solving real-world problems through technology. My work on projects like AgriConnect, WanderLodge, and AI-Based Classroom Monitoring reflects my commitment to impactful and user-centric solutions.
            </p>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/Priti_Rathi_Resume.pdf"
                download
                className="inline-block bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition duration-300"
              >
                Download Resume
              </a>
            </div>

            <br />

            {/* Social Media and Stack Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/priti-rathi-9090a4258/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Priti-Rathi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Currently Working On */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="/Photo.jpeg"
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Priti Rathi"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
