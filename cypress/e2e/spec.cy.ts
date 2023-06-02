describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Has the correct heading and buttons', () => {
    cy.get('[data-cy="app-heading"]').should('contain', 'Star Wars Information')
    cy.get('[data-cy="planets-btn"]').should('exist')
    cy.get('[data-cy="characters-btn"]').should('exist')
    cy.get('[data-cy="character-input"]').should('exist')
  })

  it('Planets are rendered correctly', () => {
    cy.get('[data-cy="planets-heading"]').should('exist')
    cy.get('[data-cy="planets-fetch-next-btn"]').should('exist')
    // wait for loading state to appear and thereafter assert on the number of rendered planets
    cy.get('[data-cy="planets-loading"]').should('be.visible').get('[data-cy="planet"]').should('have.length', 10)
    // previous button should not be visible by default, but should appear after clicking on the next page button
    cy.get('[data-cy="planets-fetch-previous-btn"]').should('not.exist').get('[data-cy="planets-fetch-next-btn"]').click().get('[data-cy="planets-fetch-previous-btn"]').should('exist')
  })

  it('Characters are rendered correctly', () => {
    cy.get('[data-cy="characters-btn"]').should('exist').click().get('[data-cy="characters-loading"]').should('be.visible').get('[data-cy="character"]').should('have.length', 10)
    cy.get('[data-cy="characters-heading"]').should('exist')
  })
})