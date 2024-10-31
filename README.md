# Hack Colossus

## Main Website for Colossus - A 24 hour National Level Hackathon held at Dr. Ambedkar Institute of Technolody

Link to the Latest Deployment: https://hackcolossus.tech/

## Installation

Clone the Repository: Start by cloning the repository to your local machine using the following command:

git clone https://github.com/Amruthamsh/learning-app.git

Navigate to the Project Directory

```
cd hack_colossus
```

## Setting up the Project Environment

Ensure you have Node.js and npm installed on your system before running the installation command. You can download and install them from the official Node.js website: https://nodejs.org. (ignore if already installed)

Install Dependencies: Install both regular dependencies and development dependencies using npm. This includes packages required for running the project and additional packages used for development purposes:

```
npm install
```

## Running the App

```
npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
