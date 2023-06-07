import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

function Experience() {
  const frontendData = [
    { id: 0, title: "HTML", text: "Experienced" },
    { id: 1, title: "React", text: "Experinced" },
    { id: 2, title: "CSS", text: "Experinced" },
    { id: 3, title: "JS", text: "Experinced" },
    { id: 4, title: "Bootstrap", text: "Basic" },
    { id: 5, title: "Tailwind", text: "Basic" },
  ];
  const backendData = [
    { id: 0, title: "NodeJS", text: "basic" },
    { id: 1, title: "MongoDB", text: "basic" },
    { id: 2, title: "PHP", text: "basic" },
  ];
  return (
    <section id="experince">
      <h2>What Skills I have</h2>
      <h5>My Experince</h5>

      <div className="container experience_container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {frontendData.map((el) => (
              <div className="experience_details" key={el.id}>
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>{el.title}</h4>
                  <small className="text-light">{el.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ========== BACKEND ========== */}
        <div className="backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {backendData.map((el) => (
              <div className="experience_details" key={el.id}>
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>{el.title}</h4>
                  <small className="text-light">{el.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
