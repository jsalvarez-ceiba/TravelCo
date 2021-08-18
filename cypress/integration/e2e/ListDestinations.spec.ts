

describe('Acceder y Consultar Destinos Nacionales e Internacionales', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    
    it('Ingresar al menu principal y acceder a Destinos', () => {

        cy.get('button').click();
        cy.contains('Destinos').click();
        
    });

});