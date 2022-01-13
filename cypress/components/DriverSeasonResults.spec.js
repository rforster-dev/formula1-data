/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import DriverSeasonResults from '../../src/components/blocks/driver-season-results/DriverSeasonResults.vue'

describe('DriverSeasonResults', () => {
  it('Page title shows', () => {
    mount(DriverSeasonResults)
    cy.get('.page-title').should('be.visible')
  })

  

  it('Top 3 drivers show', () => {
    mount(DriverSeasonResults)
    cy.get('.driver-finishtop3').should(($childEl) => {
      //expect there to be 3 elements
      expect($childEl).to.have.length(3)

      //expect the driver who finished first, to be ordered second grid
     // expect($childEl.first()).should('have.css', 'order')
     // .and('match', /2/)
    })
  })

  it('Driver order', () => {
    mount(DriverSeasonResults)
    cy.get('.driver-finishtop3:nth-child(1)')
    .should('be.visible') // yields <nav>
    .should('have.css', 'order') // yields 'sans-serif'
    .and('match', /2/) // yields 'sans-serif'

    cy.get('.driver-finishtop3:nth-child(2)')
    .should('be.visible') // yields <nav>
    .should('have.css', 'order') // yields 'sans-serif'
    .and('match', /1/) // yields 'sans-serif'

    cy.get('.driver-finishtop3:nth-child(3)')
    .should('be.visible') // yields <nav>
    .should('have.css', 'order') // yields 'sans-serif'
    .and('match', /3/) // yields 'sans-serif'
  })

  
  it('Top 3 drivers should have...', () => {
    mount(DriverSeasonResults)
    cy.get('.driver-finishtop3').children('.text-lg.font-semibold')
    cy.get('.driver-finishtop3').children('.flex.items-center.justify-center.mt-2')
    //cy.get('.driver-finishtop3').children('.text-4xl.font-bold.text-deep-purple-accent-400')
  })


  it('Table should have all columns with data', () => {
    mount(DriverSeasonResults)
    cy.get('table tbody')
    .get('tr')
    .should('have.length', 22)
    cy.get('table').children('thead tr')
    cy.get('table tr').children('th')
    cy.get('table tr').children('th')})
})
