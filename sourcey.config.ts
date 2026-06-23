export default {
  name: "Pydantic Docs",
  repo: "https://github.com/pydantic/pydantic",
  editBranch: "main",
  editBasePath: "docs",
  theme: {
    preset: "default",
    colors: {
      primary: "#e92063",
      light: "#f06292",
      dark: "#c2185b",
    },
    fonts: {
      sans: "Inter",
      mono: "JetBrains Mono",
    },
  },
  navbar: {
    links: [
      { type: "github", href: "https://github.com/pydantic/pydantic" },
      { type: "link", href: "https://pypi.org/project/pydantic/", label: "PyPI" },
    ],
  },
  footer: {
    links: [
      { type: "github", href: "https://github.com/pydantic/pydantic" },
    ],
  },
  search: {
    featured: ["introduction", "models", "fields", "validators", "serialization"],
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        slug: "",
        groups: [
          {
            group: "Getting Started",
            pages: ["introduction", "installation", "basic-usage"],
          },
          {
            group: "Core Concepts",
            pages: ["models", "fields", "validators", "serialization", "config"],
          },
          {
            group: "Field Types",
            pages: ["strings-numbers", "dates", "collections", "unions-optionals", "custom-types"],
          },
          {
            group: "Advanced",
            pages: ["generic-models", "json-schema", "type-adapter", "error-handling", "aliases"],
          },
        ],
      },
    ],
  },
};
