# Note App - React


This a notes app to practice React + Typescript + Redux + SCSS code.


## Quick start


Before starting, you'll need a recent version of NPM and Node.js


- Install packages
```
npm install
```
- Start the frontend
```
npm start
```

The application will be available on [`http://localhost:8080`](http://localhost:8080)


## Directory Structure

```
├── src
│   ├── app                         * app code
│   │   ├── components              * main components to be used by other components
│   │   ├── layouts                 * pages layouts
│   │   ├── models                  * interfaces and others related to be used in other classes
│   │   └── redux                   * all files related with redux and the store
│   │       └── sections            * reducer separated by sections
│   │           └── notes           * interfaces, actions and reducers related to notes
│   ├── assets                      * all assets (images and SASS global styles)
│   │   ├── img
│   │   └── sass
│   ├── index.html
│   └── index.tsx
└ *                                 * other config files and app related
```