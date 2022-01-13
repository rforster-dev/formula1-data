/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import TeamList from '../../src/components/blocks/team-list/TeamList.vue'

describe('TeamList', () => {

  it('JSON Endpoint should resolve', () => {
    cy.request('https://ergast.com/api/f1/current/constructors.json')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('There should be 10 constructor teams', () => {
    mount(TeamList)
    cy.get('#totalteams').should(($teams) => {
      expect($teams).to.have.length(1)
      expect($teams.first()).to.contain('10')

    })
    
  })

  it('There should be 10 constructor team images', () => {
    mount(TeamList)
    cy.get('.constructor-logos').should(($teams) => {
      expect($teams).to.have.length(10)
    })

    cy.get('.constructor-logos').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('img').should('be.visible')
    })
    
  })

  

  
})