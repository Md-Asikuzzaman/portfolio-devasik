import { IoBriefcase } from "react-icons/io5";
import SkillCard from "../SkillCard";
import { simJob, tfmJob } from "@/lib/experienceCalculator";

const Experience = () => {
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
