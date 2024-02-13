## pnpm-monorepo Sample Template with Nuxt Layers

This template demonstrates a pnpm-monorepo structure for Nuxt applications, leveraging layers for efficient UI component sharing across projects.

**Key Features:**

- Pnpm monorepo for streamlined development and dependency management
- Nuxt layers for reusable UI components
- Tailwind CSS and Headless UI pre-configured
- Apps directory for individual Nuxt applications
- UI component library for code reusability

**Getting Started:**

1. **Clone the Repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. **Install Dependencies:**

```bash
pnpm install
```

3. **Run Applications:**

- For `apps/app`:

```bash
pnpm run dev app
```

- For `apps/app1`:

```bash
pnpm run dev app1
```

4. **Develop UI Components:**

Make changes to components in `apps/ui` to update all Nuxt projects in the monorepo.

**Component Sharing with Nuxt Layers:**

1. **Install `@nuxtjs/layers`:**

```bash
pnpm add @nuxtjs/layers
```

2. **Create Layer File (`apps/ui/nuxt.config.js`):**

```javascript
export default {
  layers: {
    ui: {
      dir: ".",
      files: ["**/*.{vue,js,ts}"],
    },
  },
};
```

3. **Use Components in Other Projects:**

In `nuxt.config.js` of your Nuxt application (e.g., `apps/app`):

```javascript
export default defineNuxtConfig({
  modules: [
    ["@nuxtjs/layers", {layers: ["@monorepo/ui"]}], // Assuming '@monorepo/ui' is your component library's layer name
  ],
});
```

**Additional Notes:**

- Adapt layer name, component library directory, and other paths as needed.
- Customize Tailwind CSS and Headless UI configurations in `apps/ui/tailwind.config.js` and `apps/ui/headlessui.config.js`.
- Consider using Git branches for development and collaboration.
