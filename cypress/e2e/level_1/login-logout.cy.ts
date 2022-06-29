describe("Login and logout tests", () => {
  beforeEach(() => {
    cy.visit("https://mail.centrum.sk");
  });
  it("should log in", () => {
    // login
    cy.login();
    // logout
    cy.logout();
  });
});

// erikp93@zoznam.sk
// Cypress123
