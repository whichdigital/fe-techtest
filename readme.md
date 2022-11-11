# Which? Front-end Exercise

This repository provides information and a project boilerplate for completing the test exercise sent to candidates applying for front-end roles at Which?.

## Getting up and running

This repository provides a starting point for the test but if you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

We have provided a [Webpack] and [Babel] based development environment which can compile and bundle your source code. It also includes a [server] which will automatically reload your code changes in the browser.

Which? primarily uses [React] and [TypeScript] in our front-end projects but you can use vanilla JavaScript or other tools if you prefer. We have not provided any tooling to work with anything beyond vanilla JavaScript.

We have provided [Jest] to test your code which is a fully featured testing framework. It includes a test runner, assertions, and mock functions.

[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[server]: https://github.com/webpack/webpack-dev-server
[Jest]: https://jestjs.io/

### Requirements

To get started you'll need to make sure you have the following software tools installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (version 12 or higher is required)
- [npm](http://npmjs.com/) (this should be installed along with Node.js)

### Installation and setup

1. Clone this Git repository and change to the new directory that has been created:

    ```sh
    git clone https://github.com/whichdigital/fe-techtest.git --depth 1
    cd fe-techtest
    ```

2. Install all of the project dependencies using npm:

    ```sh
    npm install
    ```

3. Once installed you can run the Webpack development server:

    ```sh
    npm start
    ```

    Now open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic HTML page and if you open the developer console in the browser you should see a welcome message which confirms everything is loading and running correctly.

    You will need to press `ctrl + c` to stop the server.

4. And to run your tests use the following command:

    ```sh
    npm test
    ```

### Development

The source files are located in `src/`. If you change a file, webpack will reload your files and refresh the browser for you.

### Test

You can run the example tests:

`$ npm test`

## The exercise

__Goal__: Production of a client-side Web application to help a child understand multiplication.

__Duration__: This test is intended to take ~2 hours but may take more

__Description__: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

__Constraints__: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices in the Readme file.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

__Criteria for assessment__: Important things that will be assessed are:

* Project layout.
* Coding style, i.e. your approach not whether you use semicolons or not ;)
* Your approach to unit testing/TDD
* Maintainability and extensibility
* Use of responsive design
* Performance, Accessibility and use of Semantic HTML
* Naming conventions used
* Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.
