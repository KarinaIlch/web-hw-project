import SingUpPage from '../pageobjects/singup.page.js'

describe('Webdriverio SignUp page', () => {
    it('should show signup page and fill fields', async () => {
        await browser.url('https://github.com')

        await SingUpPage.clickOnSingUp()

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('signup'),
            { timeout: 10000 }
        )

        await SingUpPage.enterEmail('markodali@email.com')
        await SingUpPage.enterPassword('MarkoQwe123*')
        await SingUpPage.enterUsername('Marko')

        await expect(SingUpPage.email).toBeDisplayed()
        await expect(SingUpPage.username).toBeDisplayed()
    })
})