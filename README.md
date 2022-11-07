<br />
<p align="center">
  <h3 align="center">Cypress E2E Example</h3>
</p>



## Table of Contents

* [About](#about)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [API Tests](#api-tests)
  * [GET](#get)
  * [PUT](#put)
  * [DELETE](#delete)
* [Contact](#contact)



## About

End-to-end tests demonstrating use of Cypress and the Page Object Model, including:
* entering text into an input field
* validating the existance/visibility of elements,
* and clicking on elements.

The API tests are run using the Postman CLI against [this API](https://petstore.swagger.io/) and test the following requests:
* GET
* PUT
* DELETE

On every pull request or merge to the main/master branch, an html report of the test run is generated and Postman tests are run. You can see the results of the Cypress tests hosted [here on GitHub pages](https://ezramizrahi.github.io/cypress_e2e_example/). You can check the results of the Postman run in GitHub actions.

### Built With/Uses

* [Cypress](https://www.cypress.io/)
* [Mocha](https://mochajs.org/)
* [Mochawesome](https://github.com/adamgruber/mochawesome)
* [Mochawesome-Merge](https://github.com/Antontelesh/mochawesome-merge)
* [Mochawesome-Report-Generator](https://github.com/adamgruber/mochawesome-report-generator)
* [GitHub Actions](https://github.com/features/actions)
* [Postman](https://www.postman.com/)

## Getting Started

To get a local copy up and running follow these simple steps:

### Installation

1. Clone the repo.

2. Install the packages/dependencies
```sh
npm install
```
3. If you want to run the tests and generate a Cypress report locally, run `npm run e2etests` in your terminal.

## API Tests
Here are the Postman tests for the API tests:

### GET
```sh
pm.test("response to have 200 status", function () {
    pm.response.to.have.status(200);
});

pm.test("correct pet has been returned", function() {
    const response = pm.response.json();
    pm.expect(response.id).to.eql(1);
});
```

### PUT
```sh
pm.test("response to have 200 status", function () {
    pm.response.to.have.status(200);
});

pm.test("correct pet has been updated", function() {
    const response = pm.response.json();
    pm.expect(response.id).to.eql(1);
});

pm.test("pet name has been updated", function() {
    const response = pm.response.json();
    pm.expect(response.name).to.eql('doggie NEW NAME');
});
```

### DELETE
```sh
pm.test("response to have 200 status", function () {
    pm.response.to.have.status(200);
});

pm.test("deleted pet should have correct id", function() {
    const response = pm.response.json();
    pm.expect(response.message).to.eql(pm.environment.get("pet_id"));
});
```

## Contact

Ezra Mizrahi - ezra.mizrahi@hey.com