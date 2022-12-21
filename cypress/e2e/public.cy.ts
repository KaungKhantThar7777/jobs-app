import { testData } from '../../src/testing/test-data';

const organization = testData.organizations[0];

const job = testData.jobs[0];

describe('public application flow', () => {
  it('should navigate to and display job details page', () => {
    cy.visit(
      `http://localhost:3000/organizations/${organization.id}`
    );

    cy.findByTestId('jobs-list').should('exist');

    cy.findByRole('row', {
      name: `${job.position} ${job.department} ${job.location} View`,
    }).within(() => {
      cy.findByRole('link', {
        name: /view/i,
      }).click();
    });

    cy.url().should(
      'equal',
      `http://localhost:3000/organizations/${organization.id}/jobs/${job.id}`
    );

    cy.findByRole('heading', {
      name: job.position,
    }).should('exist');

    cy.findByText(new RegExp(job.info, 'i')).should(
      'exist'
    );
  });
  it('should display the organization page', () => {
    cy.visit(
      `http://localhost:3000/organizations/${organization.id}`
    );

    cy.findByRole('heading', {
      name: organization.name,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.email,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.phone,
    }).should('exist');

    cy.findByText(
      new RegExp(organization.info, 'i')
    ).should('exist');
  });
});
