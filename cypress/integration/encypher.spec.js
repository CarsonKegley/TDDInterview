/* eslint-disable no-undef */

describe("The encypher page", () => {

  it("should display the correct encyphered text when the generate button is clicked", () => {
    cy.visit("localhost:3000");
    cy.get("input").type("Hello World");
    cy.get("button").click();
  });
});
