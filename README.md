# 🏔️ Himalayan Gold - Monorepo

Himalayan Gold is a premium, state-of-the-art web application dedicated to bringing the pure essence of wild, raw honey from the peaks of the Himalayas to your doorstep. This project embodies luxury, authenticity, and a commitment to quality.

## 🚀 Technical Stack

- **Monorepo Manager**: [Turborepo](https://turbo.build/repo)
- **Package Manager**: [Bun](https://bun.sh/)
- **Frontend**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS & Tailwind CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Monorepo Structure

### Apps

- [`apps/web`](./apps/web): The main customer-facing storefront and member dashboard.

### Packages

- `packages/shared`: Common components and design tokens.
- `packages/eslint-config`: Shared ESLint configurations.
- `packages/typescript-config`: Shared TypeScript configurations.

## 🛠️ Development

### Getting Started

Install dependencies:

```bash
bun install
```

Start the development server for all apps:

```bash
bun dev
```

### Build

To build all apps and packages:

```bash
bun run build
```

### Linting

Run linting across the monorepo:

```bash
bun run lint
```

## 💎 Project Philosophy

Himalayan Gold isn't just a shop; it's an experience. We prioritize:

- **Visual Excellence**: Premium, dark-themed designs with interactive hexagon patterns.
- **Smooth Interaction**: Fluid animations and highly responsive interfaces.
- **User Journey**: A seamless flow from landing to product exploration to dashboard management.
