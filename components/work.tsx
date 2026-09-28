import React from "react";
import { Box } from "./box";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBuildingSkyscraper,
  IconExternalLink,
  IconSchool,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";
import { DottedSeparator } from "./separator";
import { LinkPreview } from "./link-preview";

export const Work = () => {
  return (
    <div>
      <section id="work" className="scroll-mt-8">
        <Subheading>Work experience</Subheading>
        <Link
          href="https://www.firstam.com"
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex flex-col items-start gap-3 rounded-lg border border-neutral-200 bg-white/40 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md md:flex-row md:gap-4 dark:border-neutral-800 dark:bg-neutral-900/20 dark:hover:border-blue-900 dark:hover:bg-blue-950/30"
        >
          <Box className="shrink-0 bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500">
            <IconBuildingSkyscraper className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
          </Box>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-foreground font-medium">Software Engineer</p>
              <p className="text-foreground/40 font-mono text-xs uppercase">
                May 2024 — Present
              </p>
            </div>
            <p className="text-foreground/60 mt-1 text-sm">
              First American India · Hyderabad
            </p>
            <p className="text-foreground/70 mt-3 text-sm leading-relaxed">
              Building enterprise financial data platforms with ASP.NET Core 8,
              React, Azure, event-driven microservices, test automation, and
              CI/CD. Improved backend throughput by 35% and reduced deployment
              failures by 40%.
            </p>
          </div>
        </Link>
      </section>

      <DottedSeparator className="my-10" />

      <section id="projects" className="scroll-mt-8">
        <Subheading>projects</Subheading>
        <article className="mt-5 rounded-lg border border-neutral-200 p-5 md:p-6 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <Box className="bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500">
              <IconSchool className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
            </Box>
            <div>
              <h3 className="text-foreground font-medium">StudyStack</h3>
              <p className="text-foreground/40 mt-0.5 font-mono text-xs uppercase">
                Full-stack learning management platform
              </p>
            </div>
          </div>

          <p className="text-foreground/70 mt-5 max-w-xl text-sm leading-relaxed">
            A learning platform that organizes recorded lectures into clear
            course modules for subjects such as DSA, Java, .NET, databases, and
            web technologies. It includes registration, login, protected user
            flows, course navigation, and video-based learning.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "Redux Toolkit",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
            ].map((technology) => (
              <span
                key={technology}
                className="text-foreground/60 rounded-md border border-neutral-200 px-2 py-1 font-mono text-xs dark:border-neutral-800"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-dashed border-neutral-200 pt-5 text-sm dark:border-neutral-800">
            <LinkPreview url="https://study-stack.vercel.app/">
              <span className="inline-flex items-center gap-1.5">
                Live application <IconExternalLink className="size-4" />
              </span>
            </LinkPreview>
            <LinkPreview url="https://github.com/Tejas1674/StudyStack-Frontend">
              <span className="inline-flex items-center gap-1.5">
                Frontend <IconBrandGithub className="size-4" />
              </span>
            </LinkPreview>
            <LinkPreview url="https://github.com/Tejas1674/StudyStack-backend">
              <span className="inline-flex items-center gap-1.5">
                Backend <IconBrandGithub className="size-4" />
              </span>
            </LinkPreview>
          </div>
        </article>
      </section>
    </div>
  );
};
