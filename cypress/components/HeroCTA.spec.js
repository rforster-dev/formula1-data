/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import HeroCTA from '../../src/components/blocks/hero-cta/HeroCTA.vue'

describe('HeroCTA', () => {
  it('Title and text should be visible', () => {
    mount(HeroCTA)
    cy.get('.hero-cta-title').should('be.visible')
    cy.get('.hero-cta-text').should('be.visible')
  })

  it('Link should be visible', () => {
    mount(HeroCTA)
    cy.get('.hero-cta-link').should('be.visible')
  
  })

  it('3 CTA boxes should be visible with correct data', () => {
    mount(HeroCTA)
    cy.get('.hero-cta-firstraces').should('have.length', 3)
    .each(($childEl) => {
     console.log($childEl)
     // find each element within to have h3, p.
    })
  
  })

  //@todo
  // write statement on 4th box



})