import React from "react";

function Projects() {
  const projects = [
   
    {
      id: 1,
      title: "AI-Based Institute Analysis",
      description:
        "AI-powered React app to visualize student engagement and curriculum relevance.",
      tech: "ReactJS",
      image: "/ai-classroom.png",
      code: "https://github.com/Priti-Rathi/AI-Based-Classroom-Monitoring-System",
      video: "#",
    },
      
    {
      id: 2,
      title: "WanderLodge",
      description:
        "Airbnb-inspired MERN app with user login, listings, image uploads, and reviews.",
      tech: "MERN Stack",
      image: "/wanderlodge.png",
      code: "https://github.com/Priti-Rathi/WanderLodge",
      video: "https://wanderlodge-wn66.onrender.com/listings", // Removed actual demo so button won't show
    },
     {
      id: 3,
      title: "AgriConnect",
      description:
        "A farmer-friendly platform for community forums, knowledge sharing, and trading products.",
      tech: "HTML, CSS, JS, Node.js, Express, MongoDB",
      image: "/agriconnect.jpg",
      code: "https://github.com/Priti-Rathi/AGRICONNECT",
      video: "#",
    },
    {
  id: 4,
  title: "Interactive Climate-Gender Impact Model",
  description:
    "A web platform highlighting climate change's impact on gender inequality",
  tech: "Javascript,Figma",
  image: "/Climate.png", // Add this image to your public folder
  code: "https://github.com/hlukare/NASA-space-app-challenge",
  video: "https://sync-space1.netlify.app/",
},
  {
      id: 5,
      title: "AI Based Career Guidance",
      description:
        "Android app to provide personalized career suggestions using Kotlin and Groq API.",
      tech: "Kotlin, Firebase, Firestore, Python",
      image: "/CareerGuide.png",
      code: "https://github.com/Priti-Rathi/CareerGuide",
      video: "https://cms-sih.vercel.app/",
    },
    {
  id: 6,
  title: "All About Birds",
  description:
    "A web app that allows users to enter the name of a bird and fetches its image, sound, and relevant information using API integration.",
  tech: "HTML, CSS, JavaScript",
  image: "/birds.jpg", // Add this image to your public folder
  code: "https://github.com/Priti-Rathi/All-About-Birds-project-",
  video: "#",
},
{
  id: 7,
  title: "Productivity Booster",
  description:
    "A Python-based personal productivity tool for task scheduling, pop-up reminders, interactive tracking, and daily summaries.",
  tech: "Python, Tkinter, Schedule, Datetime",
  image: "/productivity.png", // Add this image to your public folder
  code: "https://github.com/Priti-Rathi/Productivity-Booster",
  video: "#",
},


  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
          {projects.map(({ id, title, description, tech, image, code, video }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={image}
                className="w-full h-48 object-cover rounded-md mb-4"
                alt={title}
              />
              <div className="font-bold text-xl mb-1">{title}</div>
              <p className="text-sm text-gray-700 mb-2">{description}</p>
              <p className="text-xs text-gray-500 italic mb-3">{tech}</p>
              <div className="flex space-x-3">
                {/* Show demo only if video is not "#" */}
                {video !== "#" && (
                  <a
                    href={video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Github link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
