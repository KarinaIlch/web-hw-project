class SubscribePage {

    get subscribeBtn() { return $('a[href="https://github.com/newsletter"]') }
    get titleDeveloperNewLetter() { return $('h1') }
    get workEmailInput() { return $('#form-field-emailAddress') }
    get countryForm() { return $('#form-field-country') }
    get selectUkraine() { return $('//*[text()="Ukraine"]') }
    get submitBtn() { return $('button[type="submit"][data-analytics-event*="subscribe_button_form_submit_form"]') }
    get checkText() { return $('#hero-section-brand-heading')}
    get confirmBtn() { return $('.Primer_Brand__Checkbox-module__Checkbox-checkmark___atiwt')

    }
    
    async subscribeBtnAction() {
        await this.subscribeBtn.waitForClickable({ timeout: 10000 }) 
        await this.subscribeBtn.click()
    }

    async fillEmail(value) {
        await this.workEmailInput.waitForDisplayed({ timeout: 10000 }) 
        await this.workEmailInput.setValue(value)
    }

    async chooseCountry() {
        await this.countryForm.waitForDisplayed({ timeout: 10000 })
        await this.countryForm.selectByVisibleText('Ukraine')
    }

async ConfirmCheckBox() {
    await this.confirmBtn.waitForClickable({ timeout: 10000 }) 
    await this.confirmBtn.click()
}

async submitFormAndCheckText() {
    await this.submitBtn.scrollIntoView()
    await this.submitBtn.waitForDisplayed({ timeout: 10000 })
    await this.submitBtn.waitForClickable({ timeout: 10000 })
    await this.submitBtn.click()

}}
export default new SubscribePage()

