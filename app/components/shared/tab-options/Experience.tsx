"use client";

import { IoBriefcase } from "react-icons/io5";
import SkillCard from "../SkillCard";

import { useExperience } from "@/hooks/useExperience";

const Experience = () => {
  const sim = useExperience("2024-02-01", false);
  const tfm = useExperience("2022-10-11", "2024-02-12");

  // For Present Job
  const simJob = `${sim.startMonth} ${sim.startYear} - Present (${
    sim.years > 0 ? sim.years + " Years - " : ""
  }${sim.months} month${sim.years > 0 ? "" : " - " + sim.days + " days"})`;

  // For End Jobs
  const tfmJob = `${tfm.startMonth} ${tfm.startYear} - ${tfm.endMonth} ${
    tfm.endYear
  } (${tfm.years > 0 ? tfm.years + " Years - " : ""}${tfm.months} month${
    tfm.years > 0 ? "" : " - " + tfm.days + " days"
  })`;

  return (
    <div className="flex flex-col gap-5">
      <SkillCard
        title="Next.js Developer (Frontend)"
        company="SIM Solutions Limited"
        duration={simJob}
        details={[
          "Responsive Website Design",
          "UI Bug Fixing",
          "Website Deployment",
          "Basic SEO and more.",
        ]}
        Icon={IoBriefcase}
        border="via-pink-500"
        color="text-pink-500"
        bg="bg-pink-500/30"
      />

      <SkillCard
        title="Frontend Developer"
        company="TFM tools (Contract)"
        duration={tfmJob}
        details={[
          "Responsive Web Design & Development",
          "State Management & Data Fetching",
          "UI Bug Fixing",
          "SEO and more.",
        ]}
        Icon={IoBriefcase}
      />
    </div>
  );
};

export default Experience;
