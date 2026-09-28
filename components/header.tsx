import React from "react";
import { LinkPreview } from "./link-preview";
import { siteConfig } from "@/lib/site-config";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconMapPin,
} from "@tabler/icons-react";

export const Header = () => {
  return (
    <section className="pt-5 md:pt-8" aria-labelledby="hero-title">
      <p className="text-foreground/50 inline-flex items-center gap-2 font-mono text-sm tracking-wide uppercase">
        Software Engineer <IconMapPin className="size-4" aria-hidden="true" />
        Hyderabad, India
      </p>
      <h1
        id="hero-title"
        className="text-foreground mt-5 max-w-xl text-2xl leading-tight font-medium tracking-tight text-balance md:text-6xl"
      >
        Thoughtful code. Real-world impact.
      </h1>
      <p className="text-foreground/70 mt-6 max-w-xl text-lg leading-relaxed text-pretty">
        I&apos;m Tejas, building dependable products and thoughtful experiences
        at{" "}
        <LinkPreview url="https://www.firstam.com">
          First American India
        </LinkPreview>
        , while exploring ideas that help people learn, work, and move forward.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-linear-to-b from-blue-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-blue-300/50 transition-all hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md"
        >
          View my projects <IconArrowDown className="size-4" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-foreground/70 hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        >
          Contact me <IconArrowUpRight className="size-4" />
        </a>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-dashed border-neutral-200 pt-6 dark:border-neutral-800">
        <div>
          <p className="text-foreground text-xl font-medium">2+ years</p>
          <p className="text-foreground/50 mt-1 text-xs">Enterprise software</p>
        </div>
        <div>
          <p className="text-foreground text-xl font-medium">35%</p>
          <p className="text-foreground/50 mt-1 text-xs">More throughput</p>
        </div>
        <div>
          <p className="text-foreground text-xl font-medium">40%</p>
          <p className="text-foreground/50 mt-1 text-xs">
            Fewer deploy failures
          </p>
        </div>
      </div>
    </section>
  );
};
