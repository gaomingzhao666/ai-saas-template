"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceInfo {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function ServiceInfoCard(props: ServiceInfo) {
  return (
    <Card className="hover:ring-2 transition">
      <CardHeader className="flex flex-col items-center justify-between md:flex-row">
        {props.icon}
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>

      <CardContent className="w-full">{props.desc}</CardContent>
    </Card>
  );
}
