

const user = { title: "draft-example", author: "kae@example.com" , content: "content-example"};

describe("/create", () => {
  beforeEach(() => {
    cy.intercept("POST", "/api/post").as("draft-example");
    cy.visit("/create");
  });


  it.only("create a new draft with registered mail", () => {
    cy.get('[placeholder="Title"]').type(user.title);
    cy.get('[placeholder="Author (email address)"]').type(user.author);
    cy.get('[placeholder="Content"]').type(user.content);

    cy.get('[type="submit"]').should("be.enabled").click();
    cy.screenshot();

    cy.url().should("contains", "/drafts");
    cy.location().its("pathname").should("eq", "/drafts");
    Cypress.Screenshot.defaults({
      capture: 'runner',
    })
    
  });
});
