import { createYield } from 'typescript';

describe('Acceder al portal y realizar una reserva con exito', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[name="toggler"]').click();
    cy.contains('Reservar').click();
  });

  it('Comprobar render de navbar', () => {
    cy.get('nav.navbar').should($nav => {
      expect($nav).to.exist;
    });
  });

  it('Comprobar render del form', () => {
    cy.get('div.card').should($form => {
      expect($form).to.exist;
    });
  });

  it('Comprobar info titulo [Nueva Rervación]', () => {
    cy.get('h5.title').should($title => {
      expect($title.text()).to.eq('Nueva Reservación');
    });
  });

  it('Comprobar info titlo [Informacion del vuelo]', () => {
    cy.get('h6.card-title-info-flight').should($title => {
      expect($title.text()).to.eq('Información del vuelo');
    });
  });

  it('Comprobar render del Select [Seleccionar Origen]', () => {
    cy.get('[name="origin"]').should($select => {
      expect($select).to.exist;
    });
  });

  it('Comprobar render del Select [Seleccionar Destino]', () => {
    cy.get('[name="destination"]').should($select => {
      expect($select).to.exist;
    });
  });

  it('Comprobar render del Input [Fecha]', () => {
    cy.get('[name="date"]').should($input => {
      expect($input).to.exist;
    });
  });

  it('Comprobar render del Input [Hora]', () => {
    cy.get('[name="fltime"]').should($input => {
      expect($input).to.exist;
    });
  });

  it('Comprobar render del Input [Nombres]', () => {
    cy.get('[name="name"]').should($input => {
      expect($input).to.exist;
    });
  });

  it('Comprobar render del Input [Apellidos]', () => {
    cy.get('[name="lastname"]').should($input => {
      expect($input).to.exist;
    });
  });

  it('Comprobar render del Input [Fecha de Nacimiento]', () => {
    cy.get('[name="birthdate"]').should($input => {
      expect($input).to.exist;
    });
  });

  it('Realizar reserva con exito', () => {
    cy.wait(3000);
    cy.get('[name="origin"]').select('Medellín');
    cy.get('[name="destination"]').select('Cali');
    cy.get('[name="date"]').type('2021-08-30');
    cy.get('[name="fltime"]').type('14:00');
    cy.get('[name="name"]').type('Guest Name');
    cy.get('[name="lastname"]').type('Guest LastName');
    cy.get('[name="birthdate"]').type('1997-04-04');
    cy.wait(2000);
    cy.get('[name="save"]').click();

    cy.get('h5.flight-number').should($h5 => {
      expect($h5).to.exist;
    });
  });
});
