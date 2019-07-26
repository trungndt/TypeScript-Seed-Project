# TypeScript-Seed-Project
TypeScript Seed Project - Built with Webpack 4

The main purpose of this repository is to show a good end-to-end project setup and workflow for writing Node code in TypeScript. We will try to keep this as up-to-date as possible, but community contributions and recommendations for improvements are encouraged and will be most welcome.

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [TypeScript + Node](#typescript--node)
	- [Getting TypeScript](#getting-typescript)
	- [Project Structure](#project-structure)
	- [Building the project](#building-the-project)
	- [Type Definition (`.d.ts`) Files](#type-definition-dts-files)
	- [Debugging](#debugging)
	- [Testing](#testing)
	- [ESLint](#eslint)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies-1)
	- [`devDependencies`](#devdependencies)
- [Hackathon Starter Project](#hackathon-starter-project)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/) (Optional)

# Getting started
- Clone the repository
```
git clone https://github.com/trungndt/TypeScript-Seed-Project.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```

- Run the project locally
```
npm run start
```
Then, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!


- Build the project
```
npm run build
```
The entire JS and CSS codes will be bundled into `dist/bundle.js` and `dist/bundle.css` (You can change path and file name later, in `webpack.config.js`).


# TypeScript + Node
In the next few sections I will call out everything that changes when adding TypeScript to an Express project.
Note that all of this has already been setup for this project, but feel free to use this as a reference for converting other Node.js projects to TypeScript.

## Getting TypeScript
TypeScript itself is simple to add to any project with `npm`.
```
npm install -D typescript
```
If you're using VS Code then you're good to go!
VS Code will detect and use the TypeScript version you have installed in your `node_modules` folder.
For other editors, make sure you have the corresponding [TypeScript plugin](http://www.typescriptlang.org/index.html#download-links).

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is only for local build  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here   |
| **src/modules**          | Define handlers and businesses for specific modules                                           |
| **src/models**           | Models define  schemas that will be used in storing and retrieving data from database         |
| **src/public**           | Static assets that will be used client side, includes images, fonts, scss, some static libraries |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/app.ts           | Entry point to your app                                                               |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| webpack.config.js        | Config settings for running Webpack                                             |
