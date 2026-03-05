import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Orator Docs",
      disable404Route: false,
      expressiveCode: {
        themes: ["github-dark"],
      },
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
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "CLI",
          autogenerate: { directory: "cli" },
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api" },
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          content: `document.documentElement.dataset.theme = "dark"; localStorage.setItem("starlight-theme", "dark");`,
        },
      ],
    }),
  ],
});
