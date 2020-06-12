/// <reference types="Cypress" />

describe('test', () => {
  // This is a comment
  // Looking for a conflict
  it('test1', () => {
    cy.get('.critical-alerts-content').then((alerts) => {
      const mitreAttacks = alerts.toArray().map((alert) => alert.find('.attack-categories'));
      mitreAttacks.forEach((mitreAttack) => cy.wrap(mitreAttack).should(''));
    });

    cy.get('[ref="eBodyViewport"] [ref="eCenterContainer"] [role="row"]').within(() => {
      cy.get('[col-id="alerts"]');
      cy.get('[class*="papitas"]'); // contenga
      cy.get('[class^="papitas"]'); // inicie con
      cy.get('[class$="papitas"]'); // termine en
      cy.get('[class*="papitas"]:not(.cheese)'); // contenta papitas e ignore elementos con clase cheese
      cy.get('#papitas'); // id papitas
      cy.get('.papitas'); // clase igual a papitas
      cy.get('.papitas .cheese [data-test*="alert"]');
      // primero elems que tengan clase papitas, dentro, busque elems con clase cheese
      // dentro de ese elem, busque elems que contenga un att que se llama data-test y cuyo
      // valor incluya alert
      cy.get('[name="papitas"] [class="cheese"] [data-test*="alert"]');
    });
  });
});
