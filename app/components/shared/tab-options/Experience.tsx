"use client";

import { IoBriefcase } from "react-icons/io5";
import SkillCard from "../SkillCard";

import { useExperience } from "@/hooks/useExperience";
import { simCalculate, tfmCalculate } from "@/lib/expCalculator";

const Experience = () => {
  // For Present Job
  const sim = useExperience("2024-02-01", false);
  const simJob = simCalculate(sim);

  // For End Jobs
  const tfm = useExperience("2022-10-11", "2024-02-12");
  const tfmJob = tfmCalculate(tfm);

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
