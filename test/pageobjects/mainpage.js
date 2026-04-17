class MainPage {

    get headerBtn() { return $('h2*=Millions of developers') }
    get copilotBtn() { return $('span=Try GitHub Copilot') }

     async checkHeaderAndCopilotBtn() {
        await this.headerBtn.waitForExist({ timeout: 10000 })
        await this.headerBtn.scrollIntoView()
        await this.headerBtn.waitForDisplayed({ timeout: 10000 })
        await this.copilotBtn.waitForDisplayed({ timeout: 10000 })
        
}
    async clickOnCopilotBtn() {
        await this.copilotBtn.click()

}}

export default new MainPage()

