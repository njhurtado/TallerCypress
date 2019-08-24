describe('Los estudiantes login', function() {
 it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail2@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })


    it('Crear nueva cuenta',function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Nelson")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Hurtado")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("nj.hurtado@uniandes.edu.co")
        //cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        //cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('--------------------')
        //cy.get('#idUniversidad').select('inicial');
        cy.get('.cajaSignUp').find('input[type="checkbox"]').not('[disabled]').check().should('be.checked')
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("18")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Error: Ya existe un usuario registrado con el correo')
        cy.get('.sweet-alert').contains('Ok').click()
    });
    
    it('Login correcto', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("nj.hurtado@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('Salir')
    });

    it('Bísqueda de profesores',function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.Select-placeholder').click()
        cy.get('.buscador').find('input').type("Dario Correa")
        cy.get('.buscador').get('#react-select-required_error_checksum--option-0').click()
        cy.contains('Dario Correal')
        cy.get('.materias').contains('label','Estructuras De Datos').find('input').check()
        cy.get('.materias').contains('label','Arquitectura De Solucion').find('input').check()
    });
})

 
