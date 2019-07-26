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
- [Dependencies](#dependencies)

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


## Building the project
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:


| Script Name | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Run project in localhost mode, includes watch tasks                                               |
| `build`                   | Compiles all `.ts` files to `.js` files, all `.scss` files to `.css` files in the `dist` folder   |


# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `devDependencies`

| Package                         | Description                                                                       | Required |
| ------------------------------- | --------------------------------------------------------------------------------- | -------- |
| awesome-typescript-loader       | Utility library that provides asynchronous control flow.                          | Yes      |
| css-loader                      | The css-loader interprets @import and url() and will resolve them                 | Yes      |
| mini-css-extract-plugin         | This plugin extracts CSS into separate files                                      | Yes      |
| style-loader                    | Adds CSS to the DOM by injecting a `<style>` tag                                  | Yes      |
| eslint                          | Linter for JavaScript and TypeScript files                                        | Yes      |
| tslint-eslint-rules             | Combine both TypeScript rule and ESLint rule by using this TSLint plugin          | Yes      |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity              | Yes      |
| webpack                         | Bundler for JavaScript files for usage in a browser                               | Yes      |
| webpack-cli                     | Commands to increase speed when setting up a webpack project                      | Yes      |
| webpack-dev-server              | Use webpack with a development server that provides live reloading                | Yes      |



## `dependencies`

| Package                         | Description                                                            | Required |
| ------------------------------- | ---------------------------------------------------------------------- | -------- |
| @types/jquery                   | Type definitions for jquery                                            | Yes      |
| bootstrap                       | Bootstrap plugin                                                       |          |
| jquery                          | jQuery plugin                                                          | Yes      |
| node-sass                       | Allows to compile .scss files to .css                                  | Yes      |
| sass-loader                     | Loads a Sass/SCSS file and compiles it to CSS                          | Yes      |
| select2                         | select2 plugin                                                         |          |

To install or update these dependencies you can use `npm install` or `npm update`.

## License
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE.txt) License.