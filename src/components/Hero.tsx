"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/HeroImage.png";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScroll() {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Achieve your idea into reality
            <br />
            <span className="text-3xl md:text-[6rem] font-bold mt-2 leading-none">
              with XXX corporation
            </span>
          </h1>
        </>
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
  );
}
