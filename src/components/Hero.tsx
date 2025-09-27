"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/HeroImage.png";
import { ContainerScroll } from "./ui/container-scroll-animation";

const partnerCompanies = [
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
  {
    name: "Google",
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    href: "https://www.google.com",
  },
];

export function HeroScroll() {
  return (
    <>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Achieve your idea into reality
            <br />
            <span className="text-3xl md:text-[6rem] font-bold mt-2 leading-none">
              with XXX corporation
            </span>
          </h1>
        }
      >
        <Image
          src={HeroImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      {partnerCompanies.length > 0 && (
        <div className="flex w-full flex-wrap items-center justify-center gap-8 px-4 -translate-y-16">
          {partnerCompanies.map((company, idx) => (
            <a
              key={`partner-company-${idx}`}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={company.src}
                alt={company.name}
                height={40}
                width={40}
                className="h-24 w-24 object-contain"
                draggable={false}
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
