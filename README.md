# cypress-issue-20221117

## Issue

Cypress hangs when wrapping an object containing circular references.

## Steps to reproduce this issue

1. Clone this repo.

1. `npm install` to install cypress.

1. `npm run test` to open Cypress.

1. Choose any browser, then click `Start E2E Testing` button.

1. Choose `spec.cy.js` to run the test, then Cypress will hang.

## Environment

### Cypress

* v11.1.0
* v10.11.0

### OS

* Microsoft Windows 10 Pro 10.0.19045

### Browser

* Google Chrome 107.0.5304.107 (Official Build) (64-bit)
* Microsoft Edge 107.0.1418.42 (Official build) (64-bit)
* Mozilla Firefox 107.0 (64-bit)

## Reported

https://github.com/cypress-io/cypress/issues/24715
