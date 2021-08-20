describe('Acceder al portal y realizar una reserva con exito', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Realizar reserva con exito', () => {
    cy.get('button').click();
    cy.contains('Reservar').click();
    cy.wait(3000);
    cy.get('[name="origin"]').select('Medellín');
    cy.get('[name="destination"]').select('Cali');
    cy.get('[name="date"]').type('2021-08-30');
    cy.get('[name="name"]').type('Guest Name');
    cy.get('[name="lastname"]').type('Guest LastName');
    cy.get('[name="birthdate"]').type('1997-04-04');
    cy.wait(2000);
    cy.get('[name="save"]').click();
  });
});
