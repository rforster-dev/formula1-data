/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import HeroBanner from '../../src/components/blocks/hero-banner/HeroBanner.vue'

describe('HeroBanner', () => {
  it('Image displaying', () => {
    mount(HeroBanner)
    cy.get('.hero-img').should('be.visible')
    .should('have.attr', 'src')
  })

  it('Image has alt text', ()=>{
    mount(HeroBanner)
    cy.get('.hero-img').should('be.visible')
    .should('have.attr', 'alt')
  })
  it('Hero banner has title', ()=>{
    mount(HeroBanner)
    cy.get('.hero-banner-title').should('be.visible')
    .should('contain', 'Max Verstappen wins the 2021 Formula 1 championship! 🏆')
  })

  it('Hero banner has text', ()=>{
    mount(HeroBanner)
    cy.get('.hero-banner-text ').should('be.visible')
    .should('contain', 'After a thrilling season, Max Verstappen is crowned champion of the F1 2021 season!')
  })

  it('Button should be visible and clickable', ()=>{
    mount(HeroBanner)
    cy.get('.hero-banner-btn').should('be.visible')
    cy.get('.hero-banner-btn').click()
  })



})