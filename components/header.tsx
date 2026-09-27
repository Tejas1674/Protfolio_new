import React from "react";
import { LinkPreview } from "./link-preview";
import { siteConfig } from "@/lib/site-config";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I'm a Full Stack Developer at{" "}
        <LinkPreview url="https://www.firstam.com">
          First American India
        </LinkPreview>
        , building enterprise financial data platforms with ASP.NET Core 8
        microservices and React.js. I work across the full SDLC — from
        requirements and design to CI/CD deployment and production support.
      </div>
      <div className="text-foreground pt-4 text-base">
        I specialize in RESTful APIs, microservices architecture, and
        event-driven systems using Azure Service Bus and Kafka. I'm passionate
        about clean architecture, test automation, and applying AI-assisted
        development tools to ship faster.
      </div>
      <div className="text-foreground pt-4 text-base">
        Find me on{" "}
        <LinkPreview url={siteConfig.linkedin}>LinkedIn</LinkPreview> and{" "}
        <LinkPreview url={siteConfig.github}>GitHub</LinkPreview>, or reach out
        at{" "}
        <LinkPreview url={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </LinkPreview>
        .
      </div>
    </div>
  );
};
