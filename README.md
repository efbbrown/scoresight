# Scoresight

A chat app for creating sports predictions

## Pre-requisites

1. A google cloud account and project with firebase enabled and the following services in firebase enabled
   1. Firestore Database
   1. Realtime Database
   1. Authentication with the Google Auth Provider
1. The [firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli) installed
1. NPM installed

### Setup

Copy the `.firebaserc.example` script into a file named `.firebaserc` and
update the default project.

Copy the `firebase.example.js` script to a file name `firebase.js` and
replace the `firebaseConfig` with your own copied from your firebase project.

## App commands

### Project Setup

```sh
npm install
```

### Setup pre-commit

```sh
npm run prepare
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

## Acknowledgments

1. [This tutorial](https://www.youtube.com/watch?v=egs7_a4Yjnk&ab_channel=JustinBrooks) by Justing Brooks [(code here)](https://github.com/codingwithjustin/vue-realtime-chat/tree/main) provided a lot of inspiration for creating a chat app with vue 3 and firebase. I used much of the codebase however it did need some updating to utilise the modular SDK of Firebase V9 as it was written using V8 syntax.
