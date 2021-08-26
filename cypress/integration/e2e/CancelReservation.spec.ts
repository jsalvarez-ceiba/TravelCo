import { createYield } from 'typescript';

describe('Acceder al portal y cancelar un vuelo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[name="toggler"]').click();
    cy.contains('Buscar reserva').click();
  });

  it('Comprobar render de navbar', () => {
    cy.get('nav.navbar').should($nav => {
      expect($nav).to.exist;
    });
  });

  it('Comprobar render del container list reservations', () => {
    cy.get('div.list').should($div => {
      expect($div).to.exist;
    });
  });

  it('Comprobar render de titulo [Buscar Vuelo]', () => {
    cy.get('h4.text-white').should($title => {
      expect($title.text()).to.eq('Buscar vuelo');
    });
  });

  it('Comprobar render de Input [Buscador]', () => {
    cy.get('Input').should($input => {
      expect($input).to.exist;
    });
  });

  it('Comprobar render del Botón [Buscar]', () => {
    cy.get('button.btn').should($btn => {
      expect($btn).to.exist;
    });
  });

  it('Buscar un vuelo en especifico y cancelarlo', () => {
    cy.get('[name="search"]')
      .clear()
      .type('FL-5171');
    cy.contains('Buscar').click();
    cy.wait(5000);
    
    cy.contains('Activo').click();
    cy.wait(3000);
    cy.contains('Sí').click();
    cy.get('[name="search"]')
      .clear()

      .type('FL-5171');
    cy.contains('Buscar').click();
    cy.wait(5000);
    cy.get('p.cancel').should($btn => {
      expect($btn.text()).to.eq('Cancelado');
    });
  });
});
