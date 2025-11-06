// Actividad 5: Validación de requisitos de contraseña
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Muestra mensajes de error cuando la contraseña no cumple los requisitos', () => {

    // Campos fijos válidos
    const completarCamposBasicos = () => {
      cy.get('[data-cy="input-nombres"]').clear().type('Maria')
      cy.get('[data-cy="input-apellido"]').clear().type('Ramirez')
      cy.get('[data-cy="input-telefono"]').clear().type('1126666931')
      cy.get('[data-cy="input-dni"]').clear().type('10222332')
      cy.get('[data-cy="select-provincia"]').type('Córdoba')
      cy.get('ul > li > span').contains('Córdoba').click()
      cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita')
      cy.get('ul > li > span').contains('Santa Rosa de Calamuchita').click()
      cy.get('[data-type="day"]').type('27')
      cy.get('[data-type="month"]').type('09')
      cy.get('[data-type="year"]').type('2000')
      cy.get('[data-cy="input-email"]').clear().type('test.password@example.com')
      cy.get('[data-cy="input-confirmar-email"]').clear().type('test.password@example.com')
    }

    // Caso 1: contraseña demasiado corta
    cy.log('Validando contraseña demasiado corta')
    completarCamposBasicos()
    cy.get('[data-cy="input-password"]').type('abc')
    cy.get('[data-cy="input-repetir-password"]').type('abc')
    cy.wait(500)
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(2000)
    cy.contains('6 caracteres', { timeout: 3000 }).should('be.visible')
    cy.wait(1000)
    cy.reload()

    // Caso 2: sin mayúsculas
    cy.log('Validando contraseña sin mayúsculas')
    completarCamposBasicos()
    cy.get('[data-cy="input-password"]').type('password123!')
    cy.get('[data-cy="input-repetir-password"]').type('password123!')
    cy.wait(500)
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(2000)
    cy.contains('mayúscula', { timeout: 3000 }).should('be.visible')
    cy.wait(2000)
    cy.reload()

    // Caso 3: sin número
    cy.log('Validando contraseña sin número')
    completarCamposBasicos()
    cy.get('[data-cy="input-password"]').type('Password!')
    cy.get('[data-cy="input-repetir-password"]').type('Password!')
    cy.wait(500)
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.contains('número', { timeout: 3000 }).should('be.visible')
    cy.wait(2000)
    cy.reload()

    // Caso 4: sin carácter especial
    cy.log('Validando contraseña sin carácter especial')
    completarCamposBasicos()
    cy.get('[data-cy="input-password"]').type('Password123')
    cy.get('[data-cy="input-repetir-password"]').type('Password123')
     cy.wait(500)
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(2000)
    cy.contains('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.', { timeout: 3000 }).should('be.visible')
  })
})

