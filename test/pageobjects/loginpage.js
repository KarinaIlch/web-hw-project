class LoginPage {

    get headerSignIn() { return $('h1*=Sign in to GitHub') }
    get emailInput() { return $('#login_field') }
    get passwordInput() { return $('#password') }
    get signInBtn() { return $('input[name="commit"]') }

    async enterUsernameOrEmail(value) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 })
        await this.emailInput.setValue(value)
    }

    async enterPassword(value) {
        await this.passwordInput.waitForDisplayed({ timeout: 10000 })
        await this.passwordInput.setValue(value)
    }

    async clickOnSignInBtn() {
        await this.signInBtn.waitForClickable({ timeout: 10000 })
        await this.signInBtn.click()
    }
}

export default new LoginPage()