/// <reference types='cypress' />
// funcionalidade
describe('Testes E2E - Serverest', () => {
  const email = 'leonardoantoniofernandes@gmail.com';
  const senha = 'Vinhedo.02';

  beforeEach(() => {
    cy.login(email, senha);
  }); 

  it('Deve listar os produtos disponíveis', () => {
    /*Dado que o usuário está logado
      Quando ele acessa a tela inicial e visualiza a lista de produtos
      Então deve ver uma lista com os produtos disponíveis*/
    cy.get('[data-testid="home"]').click();
    cy.get('h4').should('contain', 'Produtos');
    cy.get(':nth-child(1) > .card-body > .card-subtitle.negrito').should('contain', 'Preço');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    /*Dado que o usuário está na tela de produtos
      Quando ele adiciona um produto à sua lista
      Então ele deve conseguir visualizar a opção de adicionar ao carrinho*/
    cy.get('h4').should('contain', 'Produtos');
    cy.get(':nth-child(3) > .card-body > .card-subtitle.negrito').should('contain', 'Preço');
    cy.get(':nth-child(3) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click({ timeout: 10000 });
    cy.get('[data-testid="adicionar carrinho"]').should('contain', 'Adicionar no carrinho');
    cy.get('.row > :nth-child(3)').should('have.length.at.least', 1);
  });

  it('Deve apresentar carrinho vazio após novo login e efetuar o logout', () => {
    /*Dado que o usuário acessa a tela de carrinho
      Quando não houver produtos adicionados
      Então ele deve ver a mensagem de carrinho vazio
      E ao clicar em logout, deve ser redirecionado para a tela de login*/
    cy.get('[data-testid="lista-de-compras"]').click();
    cy.get('[data-testid="shopping-cart-empty-message"]').should('contain', 'Seu carrinho está vazio');
    cy.get('[data-testid="paginaInicial"]').click();
    cy.get('h1').should('contain', 'Serverest Store');
    cy.get('[data-testid="logout"]').click();
    cy.get('.font-robot').should('contain', 'Login');
  });
});
