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

## Usage

To run any of the applications within the monorepo, navigate to the respective application directory under `apps/` and start the development server. For example, to start `app`:

```
cd apps/app
pnpm dev
```

Repeat the process for `app1` or any other applications within the monorepo.

## Dependencies

- **PNPM:** Used for efficient dependency management across the monorepo.
- **Nuxt:** A powerful Vue.js framework that simplifies web development.
- **TailwindCSS, HeadlessUI:** Included via Nuxt-UI for enhanced UI development.

Ensure you have PNPM installed on your system to manage dependencies and run scripts within the monorepo.

## Contributing

Contributions are welcome! If you're interested in improving this pnpm-monorepo test template, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/yourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/yourFeature`).
6. Open a pull request.

## Resources

- Nuxt UI: [https://ui.nuxtjs.org](https://ui.nuxtjs.org)
- Nuxt: [https://nuxtjs.org](https://nuxtjs.org)
- Original Article: [https://serko.dev/post/nuxt-3-monorepo](https://serko.dev/post/nuxt-3-monorepo)
- TailwindCSS: [Official Site](https://tailwindcss.com)
