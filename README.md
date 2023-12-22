# Scoresight

A chat app for creating sports predictions

## Pre-requisites

1. A google cloud account and project with firebase enabled
1. The [firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli) installed
1. NPM installed

### Setup

Copy the `.firebaserc.example` script into a file named `.firebaserc` and
update the default project.

## App commands

### Project Setup

```sh
npm install
```

### Firebase emulator

```sh
make emulate
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
