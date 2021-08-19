describe('Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitBtn = () => cy.get('button[id="submit"]')

     it('Sanity check to make sure that tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    })

    describe('Filling out the inputs', () => {
        it('Can type in the inputs', () => {
            usernameInput()
                .type('Be cool')
                .should('have.value', 'Be cool')

            emailInput()
                .type('vannjt1@icloud.com')

            passwordInput()
                .type('asdfasf')
        })

        it('Can user use checkbox', () => {
            termsInput()
                .check()
                .should('be.checked')
        })
     
    })

    describe('Can user sumbit the form data/form validation', () => {
        it('Can a user can submit the form data', () => {
        usernameInput().type('JasonVann')
        emailInput().type('vannjt1@icloud.com')
        passwordInput().type('asdfasdf')
        termsInput().check()
        submitBtn().click()
        cy.contains('vannjt1@icloud.com')
    })
    it('Submit button starts out disabled', () => {
        submitBtn().should('be.disabled')
        usernameInput().type('JasonVann')
        emailInput().type('vannjt1@icloud.com')
        passwordInput().type('asdfasdf')
        termsInput().check()
        submitBtn().should('be.enabled')
    })



    })


})
