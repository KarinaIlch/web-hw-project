import MainPage from '../pageobjects/mainpage.js'
import LoginPage from '../pageobjects/loginpage.js'
import SubscribePage from '../pageobjects/subscribe.page.js'
import SearchPage from '../pageobjects/searchpage.js'
import PricingPage from '../pageobjects/pricingpage.js'

describe('test case 1', () => {
    it('should complete GitHub home page flow', async () => {
        await browser.url('https://github.com')

        await MainPage.checkHeaderAndCopilotBtn()
        await expect(MainPage.headerBtn).toBeDisplayed()
        await expect(MainPage.copilotBtn).toBeDisplayed()
    })
})

describe('test case 2', () => {
    it('should open login page and fill login form', async () => {
        await browser.url('https://github.com')
        console.log('site opened')

        await MainPage.clickOnCopilotBtn()
        console.log('btn clicked')

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('login'),
            { timeout: 10000, timeoutMsg: 'Login page did not open' }
        )

        console.log('login page opened')

        await LoginPage.enterUsernameOrEmail('markodali@email.com')
        console.log('username entered')

        await LoginPage.enterPassword('MarkoQwe123*')
        console.log('password entered')

        await expect(LoginPage.emailInput).toBeDisplayed()
        await expect(LoginPage.passwordInput).toBeDisplayed()
        await expect(LoginPage.signInBtn).toBeDisplayed()
    })
})

describe('test case 3', () => {
    it('should open GitHub home page and subscribe', async () => {
        await browser.url('https://github.com')

        await SubscribePage.subscribeBtn.scrollIntoView()

        await expect(SubscribePage.subscribeBtn).toExist()
        await expect(SubscribePage.subscribeBtn).toBeClickable()

        await SubscribePage.subscribeBtnAction()

        await expect(browser).toHaveUrl(expect.stringContaining('github.com/newsletter'))
        await expect(SubscribePage.titleDeveloperNewLetter).toExist()

        await SubscribePage.fillEmail('markodali@email.com')
        await expect(SubscribePage.workEmailInput).toBeDisplayed()

        await expect(SubscribePage.countryForm).toBeClickable()
        await SubscribePage.chooseCountry()

        await expect(SubscribePage.confirmBtn).toBeClickable()
        await SubscribePage.ConfirmCheckBox()

        await SubscribePage.submitFormAndCheckText()
        await expect(SubscribePage.checkText).toBeDisplayed()        
        await expect(SubscribePage.checkText).toHaveText('Thanks for subscribing')
        await expect(SubscribePage.checkText).toBeDisplayed()

    })
})

describe('test case 4', () => {
    it('should click on search button and find by "art" word', async () => {
        await browser.url('https://github.com')

        await expect(SearchPage.searchBtn).toBeClickable()
        await SearchPage.clickOnSearchBtn()

        await expect(SearchPage.searchInput).toBeDisplayed()
        await SearchPage.enterTextInSearchField('art') 

        await SearchPage.waitForResults()

        expect((await SearchPage.getFirstResultText()).toLowerCase()).toContain('art')
})

describe('test case 5', () => {
    it('should click on pricing button and check the text', async () => {

        await browser.url('https://github.com')

        await expect(PricingPage.pricingBtn).toBeDisplayed()

        await PricingPage.clickOnPricingBtn()
        await expect(PricingPage.checkText).toBeDisplayed()

        await PricingPage.clickOnCompareFeatures()
        await expect(PricingPage.checkCompareBtnText).toBeDisplayed()

    })
})})