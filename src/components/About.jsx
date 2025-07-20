import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm <strong>Priti Rathi</strong>, a passionate and goal-driven
          Computer Engineering student with a strong focus on full-stack
          development, AI integration, and solving real-world problems through
          code. As a Smart India Hackathon 2024 winner and active contributor in
          college tech committees, I've worked on impactful projects like
          AgriConnect and AI-Based Classroom Monitoring.
        </p>

        <br />
       <h1 className="text-green-600 font-semibold text-xl">
  Education
</h1>
<span>
  <strong>B.Tech in Computer Engineering</strong>  
  <br />
  K.K. Wagh Institute of Engineering Education and Research, Nashik  
  <br />
  CGPA: 9.28 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>2022 - 2026</em>
  <br /><br />
  <strong>HSC (Science)</strong> – VVN College, Niphad  
  <br />
  Grade: 85.67% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>2021 - 2022</em>
  <br /><br />
  <strong>SSC</strong> – KEM School, Lasalgaon  
  <br />
  Grade: 86.80% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>2019 - 2020</em>
</span>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in C++, JavaScript, Python
          <br />
          Experienced with ReactJS, Node.js, Express.js, MongoDB, MySQL
          <br />
          Strong grasp of OOPs, DBMS, Cloud Computing
          <br />
          Excellent in team collaboration, communication, and problem-solving
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <strong>Frontend Developer</strong>, AI-Based Classroom Monitoring System  
          <br />
          Developed a ReactJS-based frontend to visualize student engagement and curriculum relevance using AI-driven analytics.
          <br /><br />
          <strong>Full-Stack Developer</strong>, AgriConnect Platform  
          <br />
          Built a digital platform enabling farmers to interact via forums and trade through a marketplace. Designed with ReactJS + Node.js + MongoDB.
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
  Achievements & Awards
</h1>
<span>
  🏆 Winner: Smart India Hackathon 2024 (Software Edition)
  <br />
  🥇 Sanjivani Techfest Winner - Secured top position in national level hackathon
  <br />
  🎓 Institute Topper - Ranked 2nd in first year at KKWIEER with a CGPA of 9.45
  <br />
  🌟 Recognized for community-impact projects in college-level project competition
</span>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to blend technology and creativity to build scalable,
          user-centric solutions that bridge gaps in communities and industries.
          I believe in lifelong learning, collaboration, and using tech as a tool
          for social impact. I'm always ready to take on new challenges and grow
          as a developer.
        </p>
      </div>
    </div>
  );
}

export default About;
