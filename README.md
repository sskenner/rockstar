# Rockstar

Rockstar is a collection of tests written for the Applitools Rockstar hackathon using [WebdriverIO 4] Node.js test framework and [Applitools Visual AI SDK].

## Tech

Rockstar uses a number of open source projects to work properly:

* [WebdriverIO 4] - WebDriver bindings for Node.js.
* [Mocha] - :coffee: Simple, flexible, fun JavaScript test framework for Node.js & The Browser. :coffee:
* [Chai] - Test framework agnostic BDD/TDD assertion library for node.js and the browser.
* [node.js] - Evented I/O for the backend
* [Visual Studio Code] - Code editor for building and debugging modern web and cloud applications.
* [Javascript] - Duh.

## Installation

Rockstar requires [Node.js](https://nodejs.org/) to run.

From a git initialized directory, clone the projects repository.

```sh
$ git clone https://github.com/sskenner/rockstar
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd rockstar
$ npm install
```

## Running the tests

### Traditional Testing
Step 1: Run the tests for version 1 of target webapp (baseline)

```sh
$ ENV=v1 npm run test TraditionalTests.js
```

Step 2: Wait for it to finish.

Step 3: Run the tests for version 2 of target webapp

```sh
$ ENV=v2 npm run test TraditionalTests.js
```

Step 4: Wait for it to finish.

### Visual AI Testing
Step 1: Run the tests for version 1 of target webapp (baseline)

```sh
$ ENV=v1 npm run test VisualAITests.js
```

Step 2: Wait for it to finish.

Step 3: Run the tests for version 2 of target webapp

```sh
$ ENV=v2 npm run test VisualAITests.js
```

Step 4: Wait for it to finish.

  [WebdriverIO 4]: <http://v4.webdriver.io/>
  [Applitools Visual AI SDK]: <https://applitools.com/>
  [Mocha]: <https://mochajs.org/>
  [Chai]: <https://www.chaijs.com/>
  [node.js]: <http://nodejs.org>
  [Visual Studio Code]: <https://code.visualstudio.com/>
  [Javascript]: <https://www.javascript.com/>