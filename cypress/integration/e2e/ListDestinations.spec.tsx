import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import ContainerPlaces from '../../../src/app/feature/Places/components/ContainerPlaces/ContainerPlaces';

describe('Acceder y Consultar Destinos Nacionales e Internacionales', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[name="toggler"]').click();
    cy.contains('Destinos').click();
  });

  it('Comprobar render de navbar', () => {
    cy.get('nav.navbar').should($nav => {
      expect($nav).to.exist;
    });
  });

  it('comprobar render del container places', () => {
    cy.get('div.flexCenter').should($div => {
      expect($div).to.exist;
    });
  });

  it('comprobar render de contenedores de destinos', () => {
    cy.get('div.card').should($element => {
      expect($element).to.exist;
    });
  });

  it('Comprobar la carga correcta de 15 contenedores de destinos', () => {
    cy.get('div.card').should($element => {
      expect($element).to.have.lengthOf(15);
    });
  });

  it('Comprobar la carga correcta de 15 imagenes de destinos', () => {
    cy.get('img.card-img-top').should($img => {
      expect($img).to.have.lengthOf(15);
    });
  });

  it('Comprobar la carga correcta de los 15 titulos de destinos', () => {
    cy.get('h5.card-title').should($div => {
      console.log($div);
      expect($div).to.have.lengthOf(15);
    });
  });
});
