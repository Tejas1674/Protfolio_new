import React from "react";
import { Subheading } from "./subheading";
import {
  IconBrandGithub,
  IconBrandDocker,
  IconBrandPython,
  IconBrandReact,
  IconBroadcast,
  IconCloud,
  IconCode,
} from "@tabler/icons-react";
import { Box } from "./box";

export const Companies = () => {
  const technologies = [
    {
      title: "React",
      description: "Interfaces that feel clear, responsive, and easy to use.",
      skeleton: (
        <IconBrandReact className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-cyan-400 to-cyan-600 ring-offset-cyan-500",
    },
    {
      title: "C# / .NET",
      description: "Reliable foundations for products that need to last.",
      skeleton: (
        <IconCode className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
    },
    {
      title: "Java",
      description:
        "A second language for thinking through systems and solutions.",
      skeleton: (
        <IconCode className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
    },
    {
      title: "Python",
      description: "For automation, experiments, and turning ideas into tools.",
      skeleton: (
        <IconBrandPython className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-yellow-400 to-yellow-600 ring-offset-yellow-500",
    },
    {
      title: "Redis · Kafka",
      description: "Fast data and messages that keep products moving.",
      skeleton: (
        <IconBroadcast className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500",
    },
    {
      title: "Azure · Docker",
      description: "The delivery layer that helps good ideas reach people.",
      skeleton: (
        <IconBrandDocker className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-indigo-400 to-indigo-600 ring-offset-indigo-500",
    },
    {
      title: "Git · Collaboration",
      description:
        "Small iterations, shared context, and work that keeps improving.",
      skeleton: (
        <IconBrandGithub className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-neutral-400 to-neutral-600 ring-offset-neutral-500",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-8">
      <Subheading>Skills</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {technologies.map((tech) => (
          <div key={tech.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={tech.boxClassName}>{tech.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">
                {tech.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
