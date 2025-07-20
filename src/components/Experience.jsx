import React from "react";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      logo: "/java.png",
      name: "Java",
    },
    {
      id: 5,
      logo: "/python.webp",
      name: "Python",
    },
    {
      id: 6,
      logo: "/reactjs.png",
      name: "ReactJS",
    },
    {
      id: 7,
      logo: "/node.png",
      name: "Node.js",
    },
    {
      id: 8,
      logo: "/express.png",
      name: "Express.js",
    },
    {
      id: 9,
      logo: "/mongodb.jpg",
      name: "MongoDB",
    },
    // {
    //   id: 10,
    //   logo: "/oracle.png",
    //   name: "Oracle SQL",
    // },
    {
      id: 11,
      logo: "/mysql.webp", 
      name: "SQL",
    },
    {
      id: 12,
      logo: "/firebase.png", 
      name: "Firebase",
    },
    {
      id: 13,
      logo: "/kotlin.webp",
      name: "Kotlin",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="mb-6">
          I've worked with the following technologies during my academic
          projects and self-learning journey in web and app development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[1px] rounded-full md:w-[150px] md:h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[64px] h-[64px] object-contain rounded-full"
                alt={name}
              />
              <div className="mt-2 font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
