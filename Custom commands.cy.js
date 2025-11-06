// Llenar los datos personales
Cypress.Commands.add('DatosPersonales', (nombre, apellido, telefono, dni) => {
  cy.log('Ingresando nombres, apellidos, celular y dni')
  cy.get('[data-cy="input-nombres"]').clear().type(nombre)
  cy.get('[data-cy="input-apellido"]').clear().type(apellido)
  cy.get('[data-cy="input-telefono"]').clear().type(telefono)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
})

// Seleccionar provincia y localidad
Cypress.Commands.add('seleccionarUbicacion', (provincia, localidad) => {
  cy.log('Seleccionar provincia y localidad')
  cy.get('[data-cy="select-provincia"]').clear().type(provincia)
  cy.get('ul > li > span').contains(provincia).click()
  cy.get('[data-cy="select-localidad"]').clear().type(localidad)
  cy.get('ul > li > span').contains(localidad).click()
})

// Completar fecha de nacimiento
Cypress.Commands.add('FechaNacimiento', (dia, mes, anio) => {
  cy.log('Ingresando fecha de nacimiento')
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type(dia)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type(mes)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type(anio)
})

// Completar email
Cypress.Commands.add('Email', (email) => {
  cy.log('Ingresando mail y confirmación')
  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-confirmar-email"]').clear().type(email)
})

// Completar contraseña
Cypress.Commands.add('Password', (password) => {
  cy.log('Ingresando contraseña y confirmación')
  cy.get('[data-cy="input-password"]').clear().type(password)
  cy.get('[data-cy="input-repetir-password"]').clear().type(password)
})
