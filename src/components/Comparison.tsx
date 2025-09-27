import React from "react";
import { Compare } from "@/components/ui/compare";

export function Comparison() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[32rem] w-full mt-4 mb-16 md:w-6xl mx-auto"
        slideMode="hover"
      />
    </div>
  );
}
