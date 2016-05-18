# Which? Javascript Exercise

## Getting up and running

This repo contains a very simple development environment. We'll need to install some stuff to get going.

## Requirements

Webpack needs nodejs to do it's thing. We aren't making a node app - just using it as a dev tool.

* nodejs

## Dependencies

We have specified all the dependencies we need in the `package.json` file. Npm will install them for us:

`$ npm install`

## Run!

Ok, time to run the app. Npm takes care of business again:

`$ npm start`

This will fire up the wepback dev server. It's not important to understand how it works for now.

Open `http://localhost:8080/` in your browser and you should see a basic html page. If you open the development console in your browser you should see a welcome message.

## Development

The source files are located in `app/`. If you change a file, webpack will reload your files and refresh the browser for you. It's an ES5 environment, so classic javascript only!

## Test

Tests aren't part of the initial exercise, but you can run the example tests:

`$ npm test`
