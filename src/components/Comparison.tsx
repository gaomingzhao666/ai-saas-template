import React from "react";
import { Compare } from "@/components/ui/compare";

export function Comparison() {
  return (
    <Compare
      firstImage="https://assets.aceternity.com/code-problem.png"
      secondImage="https://assets.aceternity.com/code-solution.png"
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="h-[32rem] w-full md:w-6xl mx-auto"
      slideMode="hover"
    />
  );
}
