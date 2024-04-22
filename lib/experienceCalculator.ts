import { useExperience } from "@/hooks/useExperience";

const sim = useExperience("2024-02-01", false);
const tfm = useExperience("2022-10-11", "2024-02-12");

// For Present Job
export const simJob = `${sim.startMonth} ${sim.startYear} - Present (${
  sim.years > 0 ? sim.years + " Years - " : ""
}${sim.months} month${sim.years > 0 ? "" : " - " + sim.days + " days"})`;

// For End Jobs
export const tfmJob = `${tfm.startMonth} ${tfm.startYear} - ${tfm.endMonth} ${
  tfm.endYear
} (${tfm.years > 0 ? tfm.years + " Years - " : ""}${tfm.months} month${
  tfm.years > 0 ? "" : " - " + tfm.days + " days"
})`;
