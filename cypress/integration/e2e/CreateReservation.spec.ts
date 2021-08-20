

describe('Acceder al portal y realizar una reserva con exito', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('Realizar reserva con exito', () => {
        cy.get('button').click();
        cy.contains('Reservar').click();
        
        cy.wait(5000);

        cy.contains('Seleccionar Origen').click();





    });
});