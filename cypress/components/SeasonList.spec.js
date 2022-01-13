/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import SeasonList from '../../src/components/blocks/season-list/SeasonList.vue'

describe('SeasonList', () => {

  it('JSON Endpoint should resolve', () => {
    cy.request('https://ergast.com/api/f1/current/results/1.json')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('Each race should be visible', () => {
    mount(SeasonList)
    cy.get('.race-item').should('be.visible')
  })

  it('Each race should have a title', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-title').should('be.visible')
    })
  })

  it('Each race should have a winner', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-winner').should('be.visible')
    })
  })

  it('Each race should have a winning constructor', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-constructor').should('be.visible')
    })
  })

  it('Each race should have a total laps', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-laps').should('be.visible')
    })
  })

  it('Each race should have a finishing time', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-finishtime').should('be.visible')
    })
  })

  it('Each race should have a round number', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-round').should('be.visible')
    })
  })

  it('Each race should have a time and data', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-timedate').should('be.visible')
    })
  })

  it('Each race should have a google map link', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-gmap-link').should('be.visible')
    })
  })

  it('Each race should have a race wikipedia link', () => {
    mount(SeasonList)
    cy.get('.race-item').each(($el,$index) => {
      // $el is a wrapped jQuery element
      cy.get($el)
      .get('.race-wikilink').should('be.visible')
    })
  })
})