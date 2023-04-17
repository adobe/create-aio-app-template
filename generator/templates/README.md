# Starter Template (<%=projectName%>)

This is a starter Adobe Developer App Builder template. Modify it with your own README contents that describe your template.

## What is an Adobe Developer App Builder Template?

An Adobe Developer App Builder template is a collection of code and configuration that can be used to bootstrap an App Builder application.

Your template, written in [Yeoman](https://yeoman.io), will run code that can install and edit files for an App Builder app.

The `install.yml` file will include directives that will further configure the workspaces, and APIs that are needed for your template.

## install.yml (TODO)

The specification for the file is [here](about:blank)

## Yeoman Generator entry point

When your template is installed, it will run the Yeoman generator at `src/index.js`. When run, the current working directory will be the root path of the App Builder app.

## Unit Tests

Run `npm test` to run the unit tests which are located in the `test` folder.

The tests are run using [Jest](https://jestjs.io/).

## End to End Tests

Run `npm run e2e` to run the generator itself.

A sub-folder will be created, and your generator will be run in it. The folder will be called `temp-template-test`.

## How can I submit my template to the Adobe IO Template Registry?

1. [Publish your module to npm](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
2. Go to [https://github.com/adobe/aio-template-submission/issues](https://github.com/adobe/aio-template-submission/issues)
3. Select the `New Issue` button
4. Select `Template Update Request`
5. Enter the name of your NPM Module
6. Select `Submit New Issue`
7. Watch the issue for any updates regarding your issue status
