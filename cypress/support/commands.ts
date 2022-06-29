// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login user to email
     * @example cy.login()
     */
    login(): Chainable<Element>;
    /**
     * Custom command to logout user to email
     * @example cy.logout()
     */
    logout(): Chainable<Element>;
    /**
     * Custom command to compose an email
     * @example cy.composeEmail()
     */
    composeEmail(to: string, subject: string, text: string): Chainable<Element>;
  }
}

Cypress.Commands.add("login", () => {
  // Get data from enviroment variables
  const username =
    Cypress.env("CYPRESS_EMAIL") || "no email found in process.env";
  const password =
    Cypress.env("CYPRESS_PASSWORD") || "no password found in process.env";
  // clear iputs
  cy.get('input[type="text"]').clear();
  cy.get('input[type="password"]').clear();
  // type in credentials
  cy.get('input[type="text"]').type(username);
  cy.get('input[type="password"]').type(password);
  // submit and click login button
  cy.get('input[type="submit"]').click();
});

Cypress.Commands.add("logout", () => {
  // click logout button
  cy.get('a[id="qa_logout_ju2"]').click();
});

Cypress.Commands.add(
  "composeEmail",
  (to: string, subject: string, text: string) => {
    // click new email button
    cy.get('strong[id="compose_button"]').click();
    // type in recipient input
    cy.get('input[id="recipient_rightclick_to"]').type(to);
    // type in subject input
    cy.get('input[id="subject_input"]').type(subject);
    // type in text field
    cy.iframe("#mail_composer_body_ifr").find("p").type(text);
  }
);
