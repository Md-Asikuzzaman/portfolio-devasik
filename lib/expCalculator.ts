export const simCalculate = (sim: any) => {
  return `${sim.startMonth} ${sim.startYear} - Present (${
    sim.years > 0 ? sim.years + " Years - " : ""
  }${sim.months} month${sim.years > 0 ? "" : " - " + sim.days + " days"})`;
};

export const tfmCalculate = (tfm: any) => {
  return `${tfm.startMonth} ${tfm.startYear} - ${tfm.endMonth} ${
    tfm.endYear
  } (${tfm.years > 0 ? tfm.years + " Years - " : ""}${tfm.months} month${
    tfm.years > 0 ? "" : " - " + tfm.days + " days"
  })`;
};
