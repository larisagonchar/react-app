describe('Counter component', () => {
  it('contains counter', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h3').contains('Counter: 0');
  });

  it('increase value after clicking increment button', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('increment').click();
    cy.get('h3').contains('Counter: 1');
  });

  it('decrease value after clicking decrement button', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('decrement').click();
    cy.get('h3').contains('Counter: -1');
  });
});