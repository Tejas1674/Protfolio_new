import React from "react";
import { Box } from "./box";
import Link from "next/link";
import {
  IconBuildingSkyscraper,
  IconMapPin,
  IconSettingsAutomation,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";

const workItems = [
  {
    href: "https://www.firstam.com",
    title: "First American India",
    description:
      "Software Engineer — ASP.NET Core 8 microservices & React.js for US county-level financial data platforms.",
    icon: (
      <IconBuildingSkyscraper className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
  },
  {
    href: "#",
    title: "Geo Tools",
    description:
      "County creation module with automated onboarding, duplicate detection, and RBAC — 50% effort reduction.",
    icon: (
      <IconMapPin className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
  },
  {
    href: "#",
    title: "NGS 2.0",
    description:
      "Enterprise rule configuration system on microservices — 98% data accuracy with full compliance audit trail.",
    icon: (
      <IconSettingsAutomation className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
  },
];

export const Work = () => {
  return (
    <div>
      <Subheading>Work & Projects</Subheading>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        {workItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
          >
            <Box className={`mr-4 ${item.boxClassName}`}>{item.icon}</Box>
            <p className="text-foreground font-medium">{item.title}</p>
            <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
            <p className="text-foreground/70">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
