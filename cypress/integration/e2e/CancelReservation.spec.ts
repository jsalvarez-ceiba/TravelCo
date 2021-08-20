describe('Acceder al portal y cancelar un vuelo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Realizar reserva con exito', () => {
    cy.get('button').click();
    cy.contains('Buscar reserva').click();
    cy.wait(5000);
    cy.contains('Activo').click();
    cy.contains('Sí').click();
  });
});
