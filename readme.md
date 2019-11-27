# Which? Javascript Exercise

## Getting up and running

Clone or fork this repo. If you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

This repo contains a very simple webpack based development environment. We'll need to install some stuff to get going...

### Requirements

Webpack needs nodejs to do its thing. We aren't making a node app - just using it as a dev tool.

* [nodejs](https://nodejs.org/en/)

Installing node.js will also install [npm](https://www.npmjs.com) for us too. We'll need it for dependencies and some scripts.

### Dependencies

We have specified all the dependencies we need in the `package.json` file. Npm will install them for us:

`$ npm install`

### Run!

Ok, time to run the app. Npm takes care of business again:

`$ npm start`

This will fire up the wepback dev server. It's not important to understand how it works for now.

Open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic html page. If you open the development console in your browser you should see a welcome message.

### Development

The source files are located in `src/`. If you change a file, webpack will reload your files and refresh the browser for you.

### Test

You can run the example tests:

`$ npm test`

## The exercise

__Goal__: Production of a client-side Web application to help a child understand multiplication.

__Duration__: This test is intended to take ~2 hours but may take more

__Description__: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.

__Constraints__: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

__Criteria for assessment__: Important things that will be assessed are:

* Project layout.
* Coding style, i.e. your approach not whether you use semicolons or not ;)
* Your approach to unit testing/TDD
* Maintainability and extensibility
* Use of responsive design
* Performance & Accessibility
* Naming conventions used
* Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.

