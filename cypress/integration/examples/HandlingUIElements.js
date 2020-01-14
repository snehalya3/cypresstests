/// <reference types="cypress"/>

describe('UI Elements', function()
{
    it('Verify Inputbox & Radio Buttons', function()
    {

        cy.visit("http://newtours.demoaut.com/mercurysignon.php")
        cy.url().should('include','newtours')
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=login]').should('be.visible').click()
        cy.title().should("eq","Find a Flight: Mercury Tours:")
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()
        cy.get('[name=findFlights]').should('be.visible').click()
        cy.title().should("eq","Select a Flight: Mercury Tours")

    }
    
    )


it('Check Boxes and Drop Down', function()
    {

        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.url().should('include','Register')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
    	cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
        
        cy.wait(3000)
        
        cy.get('#Skills').select('Android').should('have.value','Android')

        cy.wait(3000)

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()

    }
    
    )

    it('Select Countries Searchable drop down', function()
    {
        cy.get('[role=combobox]').click({force : true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
    }
    
    )        
}

)