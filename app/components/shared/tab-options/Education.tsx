import React from "react";
import SkillCard from "../SkillCard";

import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="flex flex-col gap-5">
      <SkillCard
        title="B.S.c in Computer Science & Engineering"
        company="Bangladesh University of Business & Technology"
        duration="Jan 2022 - Running"
        details={[
          "Advanced Software Development",
          "Algorithmic Thinking",
          "Database Management",
          "System Architecture and more.",
        ]}
        Icon={FaGraduationCap}
        border="via-pink-500"
        color="text-pink-500"
        bg="bg-pink-500/30"
      />

      <SkillCard
        title="Diploma in Computer Engineering"
        company="City Polytechnic Institute"
        duration="Jan 2018 - Dec 2022"
        details={[
          "Programming Proficiency",
          "Problem Solving",
          "Hardware Expertise",
          "Team Collaboration and more.",
        ]}
        Icon={FaGraduationCap}
      />
    </div>
  );
};

export default Education;
