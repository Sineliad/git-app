describe("App Page", () => {
  it("Render Learn react Link", () => {
    cy.visit("/");
    cy.get("a").should("have.text", "Learn React");
  });
});
