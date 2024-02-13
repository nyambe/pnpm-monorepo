# PNPM Monorepo Test Template

This project is a pnpm-monorepo test template featuring Nuxt layers to facilitate a scalable and efficient development environment for web applications. It leverages the power of monorepos to manage multiple packages and applications within a single repository.

## Description

The monorepo includes several packages under the `apps` directory, specifically:

- `apps/app`: A Nuxt application serving as a primary test environment.
- `apps/app1`: Another Nuxt application for additional testing scenarios.
- `apps/ui`: A UI component library that houses reusable components. Components within this library are automatically available across other Nuxt installations in the monorepo, thanks to the integrated Nuxt-UI which brings TailwindCSS, HeadlessUI, and more for crafting beautiful, responsive UIs with ease.

## Installation

To get started with this monorepo template, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/nyambe/pnpm-monorepo
   ```
2. Navigate to the repository directory:
   ```
   cd pnpm-monorepo
   ```
3. Install dependencies using PNPM:
   ```
   pnpm install
   ```

## Setup

```bash
pnpm install
```

## Development

```bash
# all packages
pnpm dev

# app only
pnpm app dev
```

## Production

```bash
# all packages
pnpm build

# app only
pnpm app build
```

## Dependencies

- **PNPM:** Used for efficient dependency management across the monorepo.
- **Nuxt:** A powerful Vue.js framework that simplifies web development.
- **TailwindCSS, HeadlessUI:** Included via Nuxt-UI for enhanced UI development.

Ensure you have PNPM installed on your system to manage dependencies and run scripts within the monorepo.

## Creating an App with UI Layer

After successfully creating a UI layer with the package name `@nuxt-monorepo/ui`, the next step is to create a Nuxt app that inherits from the UI Nuxt layer.

### Step 1: Initialize a New Nuxt Project

1. In the `apps` directory, use the nuxi command to create a new Nuxt project named `app`:
   ```shell
   cd apps
   pnpm dlx nuxi@latest init app
   ```
2. For consistency, rename the app package to `@nuxt-monorepo/app` in `apps/app/package.json`:
   ```json
   - "name": "nuxt-app",
   + "name": "@nuxt-monorepo/app",
   ```
3. Enter the app directory and run `pnpm install` to initialize the project:
   ```shell
   cd app
   pnpm i
   ```

### Step 2: Adding the UI Layer to the App

1. In the app directory, add the recently created `@nuxt-monorepo/ui` as a devDependency:
   ```shell
   pnpm add -D @nuxt-monorepo/ui
   ```
2. In the app's `nuxt.config.ts`, add `@nuxt-monorepo/ui` as a layer to extend from:
   ```typescript
   export default defineNuxtConfig({
     devtools: {enabled: true},
     extends: ["@nuxt-monorepo/ui"],
   });
   ```
3. Try using UI's components like `TheMessage` in `app.vue`. Your app project structure should now include:

   - `apps/app`
     - `app.vue`
     - `nuxt.config.ts`
     - `package.json`
     - `tsconfig.json`

   Example usage in `app.vue`:

   ```vue
   <template>
     <div>
       <TheMessage />
     </div>
   </template>
   ```

After completing these settings, your app now inherits from the UI layer, allowing you to use any component from the UI package at any time through Nuxt's auto-imports feature.

### Running the App

To see your setup in action, start the app with the following command and observe the UI's `TheMessage` component successfully displayed in the app.

```shell
# In the directory of the app
pnpm dev
```

## Resources

- Nuxt UI: [https://ui.nuxtjs.org](https://ui.nuxtjs.org)
- Nuxt: [https://nuxtjs.org](https://nuxtjs.org)
- Original Article: [https://serko.dev/post/nuxt-3-monorepo](https://serko.dev/post/nuxt-3-monorepo)
- TailwindCSS: [Official Site](https://tailwindcss.com)
