/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import DriverResult from '../../src/components/blocks/driver-result/DriverResult.vue'

describe('DriverResult', () => {
  it('Display driver name', () => {
    mount(DriverResult,{
      propsData: {
        driverID: 'alonso'
      }
    })
    cy.get('.driver-name', {timeout: 10000}).should('contain', 'Fernando Alonso');
  })

  it('Display constructor name', () => {
    mount(DriverResult,{
      props: {
        driverID: 'alonso'
      }
    })
    cy.get('.constructor-name', {timeout: 10000}).should('contain', 'Alpine F1 Team');
  })

  it('Display image', () => {
    mount(DriverResult,{
      props: {
        driverID: 'alonso'
      }
    })
    let constructorCar = '/__cypress/src/img/alpinef1 team.85460534.jpg'
    cy.get('.constructor-image', {timeout: 10000}).should('have.attr','src', constructorCar);
  })

  it('Carousel on click of next should go to next slide', () => {
    mount(DriverResult,{
      props: {
        driverID: 'alonso'
      }
    })
    .get('.carousel__next', {timeout: 10000}).click({multiple:true})
  })

})
