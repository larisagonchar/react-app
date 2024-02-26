describe('Counter component', () => {
  it('should contain counter', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h3').contains('Counter: 0');
  });

  it('should increase value after clicking increment button', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('increment').click();
    cy.get('h3').contains('Counter: 1');
  });

  it('should decrease value after clicking decrement button', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('decrement').click();
    cy.get('h3').contains('Counter: -1');
  });
});