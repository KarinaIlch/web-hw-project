class SingUpPage {
    get singUp() { return $('a[href*="/signup"]') }
    get email() { return $('#email') }
    get password() { return $('#password') }
    get username() { return $('#login') }

    async clickOnSingUp() {
        await this.singUp.waitForClickable({ timeout: 10000 })
        await this.singUp.click()
    }

    async enterEmail(value) {
        await this.email.waitForDisplayed({ timeout: 10000 })
        await this.email.setValue(value)
    }

    async enterPassword(value) {
        await this.password.waitForDisplayed({ timeout: 10000 })
        await this.password.setValue(value)
    }

    async enterUsername(value) {
        await this.username.waitForDisplayed({ timeout: 10000 })
        await this.username.setValue(value)
    }
}

export default new SingUpPage()