

describe('Acceder al portal y Listar reservas en el sistema', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Visualizar vuelo - Buscar un vuelo', () => {
        cy.get('button').click();
        cy.contains('Buscar reserva').click();
        cy.get('[name="search"]').clear().type('FL-5171');
        cy.get('button');
        cy.wait(5000);

    });
});