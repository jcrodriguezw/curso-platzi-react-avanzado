/* global describe, it, cy */

describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('https://curso-platzi-react-avanzado-chi.vercel.app/pet/1')
    cy.get('article')
  })

  it('si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
})
