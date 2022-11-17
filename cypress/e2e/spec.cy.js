class Node {
  parent;
  children = [];

  appendChild(child) {
    child.parent = this;
    this.children.push(child);
    return child;
  }
}

describe("Reproduce the Cypress's issue", () => {
  it("Wrap an object containing circular references", () => {
    const rootNode = new Node();
    rootNode.appendChild(new Node()).appendChild(new Node());
    cy.wrap(rootNode);
    cy.visit("https://example.cypress.io/");
  })
})
