/// <reference types='cypress' />
//Comando de login
Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('input[data-testid="email"]').type(email);
    cy.get('input[data-testid="senha"]').type(senha);
    cy.get('button[data-testid="entrar"]').click();
    cy.get('h1').should('be.visible', 'Serverest Store');
  });
  