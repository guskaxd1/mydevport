import React from "react";
import styles from "./hardskills.module.css"; // CSS separado para modularidade
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/icons/flutter.png" },
  { name: "CSS", icon: "/icons/flutter.png" },
  { name: "Javascript", icon: "/icons/flutter.png" },
  { name: "Typescript", icon: "/icons/flutter.png" },
  { name: "React", icon: "/icons/flutter.png" },
  { name: "Nextjs", icon: "/icons/flutter.png" },
  { name: "Flutter", icon: "/icons/flutter.png" },
  { name: "Spring Boot", icon: "/icons/flutter.png" },
  { name: "MySQL", icon: "/icons/flutter.png" },
  { name: "Git", icon: "/icons/flutter.png" },
];

const HardSkills = () => {
  return (
    <div>
      <div className={styles.transparentContainer}></div>
      <h2 className={styles.title}>Hard Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <Image src={skill.icon} alt={skill.name} width={60} height={60} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;
