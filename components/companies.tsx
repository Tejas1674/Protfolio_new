import React from "react";
import { Subheading } from "./subheading";
import {
  IconBrandDocker,
  IconBrandReact,
  IconCloud,
  IconDatabase,
  IconServer,
} from "@tabler/icons-react";
import { Box } from "./box";

export const Companies = () => {
  const technologies = [
    {
      title: ".NET / C#",
      description:
        "ASP.NET Core 8, Minimal APIs, CQRS, Clean Architecture, SOLID principles.",
      skeleton: (
        <IconServer className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
    },
    {
      title: "React.js",
      description:
        "TypeScript, Redux, Material-UI, React Hooks, responsive & WCAG-compliant UIs.",
      skeleton: (
        <IconBrandReact className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-cyan-400 to-cyan-600 ring-offset-cyan-500",
    },
    {
      title: "Azure Cloud",
      description:
        "App Service, Functions, Service Bus, Entra ID, Application Insights, CI/CD.",
      skeleton: (
        <IconCloud className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
    },
    {
      title: "Databases",
      description:
        "SQL Server, PostgreSQL, MongoDB, CosmosDB, Redis — query optimization & caching.",
      skeleton: (
        <IconDatabase className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
    },
    {
      title: "Microservices",
      description:
        "Event-driven architecture with Kafka, Azure Service Bus, and RabbitMQ.",
      skeleton: (
        <IconServer className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
    },
    {
      title: "DevOps",
      description:
        "Docker, Kubernetes, Azure DevOps, GitHub Actions, xUnit/NUnit test automation.",
      skeleton: (
        <IconBrandDocker className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-indigo-400 to-indigo-600 ring-offset-indigo-500",
    },
  ];

  return (
    <section>
      <Subheading>Technologies I work with</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {technologies.map((tech) => (
          <div key={tech.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={tech.boxClassName}>{tech.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">{tech.title}</p>
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
