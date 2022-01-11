/// <reference types="cypress" />
import { mount } from '@cypress/vue'
//import { get } from 'core-js/core/dict'
import DriverList from '../../src/components/blocks/driver-list/DriverList.vue'

describe('DriverList', () => {
  it('displays the page title', () => {
    mount(DriverList)
    cy.get('.page-title').should('exist');
  })

  it('Verify https://ergast.com/api/f1/current/status.json can be reached', () => {
  
    cy.request('https://ergast.com/api/f1/current/status.json')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.MRData.StatusTable).to.have.property('Status');
        expect(response.body.MRData.StatusTable.Status).to.be.a('array');
        expect(response.body.MRData.StatusTable.Status[1]).have.property('statusId')
      })
  })

  it('Display the filters', () => {
    mount(DriverList)
    cy.get('#finishingStatusFilters', {timeout:5000})
    .should('be.visible')
  })

  it('Can select a filter', () => {
    mount(DriverList)
    cy.intercept('https://ergast.com/api/f1/current/status.json')
    .get('.filter-item input').click({multiple:true})
  })

})
