describe("Create and send email with attachment tests", () => {
  beforeEach(() => {
    cy.visit("https://mail.centrum.sk");
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
    //add attachment
    const fixtureFile = "cyprus.jpg";
    cy.get('input[id="mc_attachments_add"]').selectFile(
      "cypress/fixtures/" + fixtureFile,
      { force: true }
    );
    // send email
    cy.get('a[id="qa_email_send_bottom"]').click();
    // wait a bit longer because of file upload
    cy.wait(5000);
    // logout
    cy.logout();
  });
});

// erikp93@zoznam.sk
// Cypress123
