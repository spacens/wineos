# How to run it locally

## Development

- Install latest docker with docker-compose

  `docker-compose -f docker-compose.yml -f docker-compose.setup.yml run app`

- Follow steps to setup gallo repository (described in pdf document)

- Install packages

  `npm install`

  After install you can exit from docker instance.

- Run the project

  `docker-compose up`

# Angular Skeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Install Project Dependencies 
<span style="color: red">Please make sure that you point your npm registry to Gallo NPM before installing</span>

Run `npm install` to install project dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
