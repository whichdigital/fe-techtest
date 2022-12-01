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

    Now open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic HTML page. 
    
    If you open the developer console in the browser, you should see a welcome message which confirms everything is loading and running correctly.

    To stop the server when no longer needed, you can press <kbd>ctrl</kbd> + <kbd>c</kbd> in the terminal.

4. And to run your tests use the following command:

    ```sh
    npm test
    ```

## The exercise

### Goal

We would like you to create a client-side web application to help a child understand multiplication. Your application will display a grid of numbers. When a child selects a number, the multiples of that chosen number should be highlighted.

### Functional requirements

- The application must display numbers from 1 to 144.
- When a number is clicked, all numbers which are a multiple of the chosen number must be highlighted.
- When a subsequent number is clicked, all numbers which are a multiple of the new number must be highlighted. Any numbers which are **not** multiples of the new number should no longer be highlighted.

### Visual requirements

- Each number must be within a large clickable box.
- Each number must be horizontally and vertically centered within their clickable box.
- The boxes must be laid out evenly within a grid.
- On mobile and small screen devices, one number must be displayed in each grid row.
- On tablet and middle sized devices, two numbers must be displayed in each grid row.
- On desktop and large screen devices, three numbers must be displayed in each grid row.
- The grid should have a maximum width so that the clickable boxes do not get too large.
- The grid should be horizontally centered on the screen.

### Other

We'd appreciate it if you could update this readme with additional information about your solution. Things to mention might include the tools used, alternative solutions considered, improvements you'd like to make, or things you'd do differently if you had more time.

### Criteria for assessment

Your completed test exercise will be marked according to a score sheet. We will focus on the following areas:

* That your solution meets the requirements.
* How usable your application is when using assistive technology.
* Your approach to testing the application.
* The use of responsive design.
* Clear project structure and conventions.
* How readable and understandable your code is.
* The performance of your completed application.

You won’t be assessed on the appearance of the app beyond the visual requirements and accessibility criteria.


### Technical Design
- Tool : The main additional tool used in this solution was React-Hook. The choice of this was due to its several advatages including simplicity, code readability, optimisation, test-friendly and so on. Unnecessary  use of hooks and  third party libraries were avoided in other to help performance and optimisation.

- Environment SetUP : I expanded the webpack configuration file to include loaders for react files using babel as well as loading images and svgs; and resolving both JS and JSX files. I equally expanding Jest configuration for testing to include ability to resolve JS and JSX files as well as employing Jest-dom

- Folder Structure : The solution was structured with clearity, reusability, robust and scalability in mind. The entry point for the app remained index.js while the src folder contains all the resources. Fuctionalities such as NavBar, Multiplication Calculation and Footer were organised inside a folder called "features". This way, its easier to scale up, adding more features without complexity. 
To ensure code reusability, each feature contains components folder habouring different componenents. 
Also, for easy-testing, readability and clearity, I tried seprating logics from pure presentation components. Hence, each feature has a folder called view which habours view file for rendering the feature.There is also a util folder for helper functions which enhances reusability and easy to test too. 
Layout folder contains the layout file. This way, its easy to understand and expand the layout as well as adding more layouts as user needs changes.
On styling, I have different options or alternatives such us having only one css file for the app, keeping css files closer to the component or in-styling. However, I chose to keep a seprate folder called "style" which contain the css file named after its referenced component. the reason for this pattern is mainly code readability and easier debugging. 
The images were grouped into asset folder for easier identification.
For scalability purpose, I have a folder called pages which contains pages for the solution. Though at the momement, we only have one page but this pattern makes it easier to build more.
In general, index => app =>src => app => page  => -layout- => feature => view => component => utils  

- Design Patern : Container - View pattern was chosen for this solution due to its efficiency, readability. The view contains all the presentation layer for the UI while components cater for logics, states and calculations.
Also files and folders are named based on their purpose and functionality. Then all files contating JSX elements were named with the extension ".jsx" while pure logic files without JSX has the extension ".js". Equally, all folders and pure javascript files are named with lowercase while file React component files started with Capital letter. 
As a general rule, if a module (a utility, component, etc.) is only used within another module, then I want it nested in the directory structure.
To aid accessibility, I ensured all contents on the screen are tab-indexed thereby ensuring easy navigation with the tab key and that enter key on any of the rendered numbers exerts onClick function. This way, the app can be used both only with mouse, keyboard and even combination too. 
Then considering the app is for kids, I ensured the selected keys and its multiples are well distinct both in background and font color ensuring easy indentification and appealing to kids.
Also for performance and accessibilty, I ensured all list items have keys, images have alt texts, and elements have roles and ARIAL attributes where required, use of semantic HTML as first option, .
Finally, I avoided adding comments on the code as I believe that "If it needs comment, then it isn't readable".

-Test Patern : Unit testing was employed in this solution due to its efficiency and simplicity. With this technique, we were able to test not only the positivity but equally the failures that occurs on wrong input.
I wrote 11 tests matching the app requirements and constraints for instance, ensuring each component renders, rendered numbers fall within 1-144 and in sequence, numbers having the selected colour when clicked on and highlighted color if multiple of selected number.
I named each test based on the component its testing and I used "describe" to define the component while "it" explains the exact functionality being tested.
I ensured that majority of my doc queries within tests are done using "getByRole" due to its advantages including it being the query closest to how users will use the app and making testing UI resilient to change. As a matter of fact, throughout the test, I only used getByRole and getByText which ranks high on the recommendation from react-testing-library docs.
Moreover, I chose using render from react-testing-library over using renderer from react-dom due to its simplicity and efficiency. It eliminated the need for implenting utilities like "Act" or cleanUp functions.
I used screnshot-snapping for presention/view components as they are very simple, without any form of logic while other logic components were tested based on functions and contraints.
Also, I employed use of "screen" from react-testing-library over destructuring the render due to its simplicity and efficiency. Then to enable me follow best testing principles, I configuerd Eslint for react-testing 

### Improvements that can be done
-building more pages that can be linked with the navbar like Documentation
-expanding the rendered numbers to by dynamic based on user input rather than being restricted to 1 - 144
-Re-writing the code using Typescript
-Configuring good-code enforcers like Eslints and Proptypes
-Add router to support more pages
-Configure CI pipeline
-Building more layouts - giving different users different options to choose from
-Write more tests for remaining components that I left due to their lesser value like TopBar and Footer component
-SEO
-Implementing The eslint-plugin-jsx-a11y plugin  to enable feedback regarding accessibility issues in our JSX
-accessibility audits on different real-live devices