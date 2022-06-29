describe("Create and send email tests", () => {
  beforeEach(() => {
    cy.visit("https://mail.centrum.sk");
    // cy.location("href", { timeout: 10000 }).should("include", "/login");
  });
  it("should send email", () => {
    // login
    cy.login();
    // compose an email
    cy.composeEmail(
      "erik.partila.93@gmail.com",
      "Cypress test",
      "Hi! This is a cypress email test! Just ignore me :)"
    );
    // send an email
    cy.get('a[id="qa_email_send_bottom"]').click();
    // wait a bit just to make sure it is sent
    cy.wait(1000);
    // logout
    cy.logout();
  });
});

// erikp93@zoznam.sk
// Cypress123
