describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Completa todos los campos y presiona Registrar', () => {
    cy.completarDatosPersonales('Juan', 'Pérez', '3511234567', '20268800')
    cy.seleccionarUbicacion('Córdoba', 'Córdoba')
    cy.ingresarFechaNacimiento('15', '08', '1995')
    cy.completarEmail('juan.perez90@example.com')
    cy.completarPassword('P@ssw0rd123')
    cy.enviarFormulario()
  })

  // 👇 Nuevo test
  it('Muestra error al intentar registrar un email ya existente', () => {
    cy.log('Intentando registrar un usuario con email ya registrado')

    cy.completarDatosPersonales('Laura', 'Gómez', '3519876543', '30123456')
    cy.seleccionarUbicacion('Córdoba', 'Córdoba')
    cy.ingresarFechaNacimiento('10', '05', '1990')
    
    // 💡 Email que ya existe en la base de datos
    cy.completarEmail('juan.perez90@example.com')  
    cy.completarPassword('P@ssw0rd123')

    cy.enviarFormulario()

    // ✅ Verificación del mensaje de error
    cy.log('Verificando mensaje de error por email duplicado')
    cy.contains('El email ya se encuentra registrado').should('be.visible')
  })
})
