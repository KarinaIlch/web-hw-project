class PricingPage {

    get pricingBtn() { return $('a[href="/pricing"]') }
    get checkText() { return $('h1=Try the Copilot-powered platform') }
    get compareBtn() { return $('a[href="#compare-features"]') }
    get checkCompareBtnText() { return $('h1=Compare features') }

    async clickOnPricingBtn() {
        await this.pricingBtn.waitForClickable({ timeout: 10000 })
        await this.pricingBtn.click()
    }

    async clickOnCompareFeatures() {
        await this.compareBtn.scrollIntoView()
        await this.compareBtn.waitForClickable({ timeout: 10000 })
        await this.compareBtn.click()
    }
}

export default new PricingPage()