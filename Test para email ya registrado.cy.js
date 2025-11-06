//Actividad 2 _ Email repetido
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Completa todos los campos y presiona Registrar', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
   cy.get('[data-cy="input-nombres"]').type('Maria Carmen')
   cy.get('[data-cy="input-apellido"]').type('Ramirez')
   cy.get('[data-cy="input-telefono"]').type('1126666931')
   cy.get('[data-cy="input-dni"]').type('11222331') 
   cy.get('[data-cy="select-provincia"]').type('Córdoba')
   cy.press(Cypress.Keyboard.Keys.ENTER)
   cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita')
   cy.press(Cypress.Keyboard.Keys.ENTER)
   cy.get('[data-type="day"]').type('27')
   cy.get('[data-type="month"]').type('09')
   cy.get('[data-type="year"]').type('2000')
   cy.get('[data-cy="input-email"]').type('usuariodeprueba123@gmail.com')
   cy.get('[data-cy="input-confirmar-email"]').type('usuariodeprueba123@gmail.com')
  cy.get('[data-cy="input-password"]').type('Prueba12345678!')
  cy.get('[data-cy="input-repetir-password"]').type('Prueba12345678!')
  cy.get('[data-cy="btn-registrarse"]').click()
  cy.wait(5000)

})

  //Nuevo test
  it('Muestra error al intentar registrar un email ya existente', () => {
    cy.log('Intentando registrar un usuario con email ya registrado')

   cy.get('[data-cy="input-nombres"]').type('Maria Carmen')
   cy.get('[data-cy="input-apellido"]').type('Ramirez')
   cy.get('[data-cy="input-telefono"]').type('1126666931')
   cy.get('[data-cy="input-dni"]').type('33222999') 
   cy.get('[data-cy="select-provincia"]').type('Córdoba')
   cy.press(Cypress.Keyboard.Keys.ENTER)
   cy.get('[data-cy="select-localidad"]').type('Santa Rosa de Calamuchita')
   cy.press(Cypress.Keyboard.Keys.ENTER)
   cy.get('[data-type="day"]').type('27')
   cy.get('[data-type="month"]').type('09')
   cy.get('[data-type="year"]').type('2000')
    
    //Email que ya existe en la base de datos
     cy.get('[data-cy="input-email"]').type('usuariodeprueba123@gmail.com')
     cy.get('[data-cy="input-confirmar-email"]').type('usuariodeprueba123@gmail.com')
     cy.get('[data-cy="input-password"]').type('Prueba12345678!')
     cy.get('[data-cy="input-repetir-password"]').type('Prueba12345678!')
    

    //Registro final
     cy.get('[data-cy="btn-registrarse"]').click()

    // Verificación del mensaje de error
    cy.log('Verificando mensaje de error por email duplicado')
    cy.contains('Ya existe un usuario registrado con ese correo electrónico').should('be.visible')
  })
})
