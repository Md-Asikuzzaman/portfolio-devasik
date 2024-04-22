"use client";

export const useExperience = (startDate: string, endDate: any) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Calculate the difference in milliseconds
  const difference = end.getTime() - start.getTime();

  // Convert milliseconds to years, months, and days
  const years = difference / (1000 * 60 * 60 * 24 * 365.25);
  const months = (years - Math.floor(years)) * 12;
  const days = Math.floor((months - Math.floor(months)) * 30);

  // Calculate start and end years and months
  const startYear = start.getFullYear();
  const startMonth = start.toLocaleString("default", { month: "short" });
  const endYear = end.getFullYear();
  const endMonth = end.toLocaleString("default", { month: "short" });

  // Return the experience as an object
  return {
    startYear: startYear,
    startMonth: startMonth,
    endYear: endYear,
    endMonth: endMonth,
    years: Math.floor(years),
    months: Math.floor(months),
    days: days,
  };
};
