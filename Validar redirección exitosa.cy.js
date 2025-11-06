// Actividad 4: Validación de redirección
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Completa todos los campos, presiona Registrar y valida redirección al login', () => {

    cy.get('[data-cy="input-nombres"]').type('Maria')
    cy.get('[data-cy="input-apellido"]').type('Ramirez')
    cy.get('[data-cy="input-telefono"]').type('1126666931')
    cy.get('[data-cy="input-dni"]').type('10299332')

    cy.get('[data-cy="select-provincia"]').type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()

    cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita')
    cy.get('ul > li > span').contains('Santa Rosa de Calamuchita').click()

    cy.get('[data-type="day"]').type('27')
    cy.get('[data-type="month"]').type('09')
    cy.get('[data-type="year"]').type('2000')

    cy.get('[data-cy="input-email"]').type('usuariodeprueba_redireccion@gmail.com')
    cy.get('[data-cy="input-confirmar-email"]').type('usuariodeprueba_redireccion@gmail.com')

    cy.get('[data-cy="input-password"]').type('Prueba12345678!')
    cy.get('[data-cy="input-repetir-password"]').type('Prueba12345678!')

    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(5000)

    // Aserción: validar que redirige a la URL del login
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
  })
})
