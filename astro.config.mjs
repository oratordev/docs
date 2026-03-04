import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Orator Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/oratordev",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quickstart", slug: "getting-started/quickstart" },
            { label: "Core Concepts", slug: "getting-started/concepts" },
          ],
        },
        {
          label: "CLI",
          items: [
            { label: "Overview", slug: "cli/overview" },
            { label: "Commands", slug: "cli/commands" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Overview", slug: "api/overview" },
            { label: "Repositories", slug: "api/repositories" },
            { label: "Context Query", slug: "api/context" },
            { label: "Indexing", slug: "api/indexing" },
          ],
        },
        {
          label: "Integrations",
          items: [
            { label: "MCP Server", slug: "integrations/mcp" },
            { label: "VS Code", slug: "integrations/vscode" },
            { label: "GitHub App", slug: "integrations/github" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Team Context", slug: "guides/team-context" },
            { label: "Self-Hosting", slug: "guides/self-hosting" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
