class SearchPage {

    get searchBtn() { return $('[data-action*="qbsearch-input#handleExpand"]')
    }

    get searchInput() { return $('#query-builder-test') 
    }

    get searchResults() { return $$('span.search-match') 
    }

    get firstResult() { return $('span.search-match')
    }

    async clickOnSearchBtn() {
        await this.searchBtn.waitForClickable({ timeout: 10000 })
        await this.searchBtn.click()
    }
    
    async enterTextInSearchField(value) {
        await this.searchInput.waitForDisplayed({ timeout: 10000 })
        await this.searchInput.click()
        await this.searchInput.setValue(value)
        await browser.keys('Enter')
    }

    async getFirstResultText() {
        await this.firstResult.waitForDisplayed({ timeout: 10000 })
        return await this.firstResult.getText()
    }
   
    async waitForResults() { await browser.waitUntil(
        async () => (await this.searchResults).length > 0,
        { timeout: 10000 }
    )
}
}

export default new SearchPage()