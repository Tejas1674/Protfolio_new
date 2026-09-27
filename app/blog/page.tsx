import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
  description:
    "Notes on full stack development, .NET microservices, React, and test automation.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">My thoughts on things</Subheading>
        <p className="text-foreground pt-4 text-base">
          I write about full stack development, microservices architecture, and
          lessons learned building enterprise applications.
        </p>

        <BlogIndex posts={posts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
