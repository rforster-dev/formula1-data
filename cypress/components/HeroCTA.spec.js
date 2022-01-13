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

  it('I am testing if thiss is visible', ()=>{
    mount(HeroCTA)
    
  })

  it('Link should be visible', () => {
    mount(HeroCTA)
    cy.get('.hero-cta-link').should('be.visible')
  
  })

  it('3 CTA boxes should be visible', () => {
    mount(HeroCTA)
    cy.get('.hero-cta-firstraces').should('have.length', 3)
    .each(($childEl) => {
     console.log($childEl)
     cy.get($childEl[0]).should('be.visible')

    })
  
  })

  //@todo
  // write statement on 4th box



})