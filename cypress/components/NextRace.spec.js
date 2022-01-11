/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import NextRace from '../../src/components/blocks/next-race/NextRace.vue'

describe('NextRace', () => {
  it('Title and text should be visible', () => {
    mount(NextRace)
    cy.get('.nextrace-cta').should('be.visible')
  })
})