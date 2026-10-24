
import { Locator, Page, expect } from '@playwright/test'

export class BasePage {

    readonly page: Page

    constructor(page: Page) {

        this.page = page;

    }

    async LoadUrl(url: string): Promise<void> {

        await this.page.goto('');

    }

    async clickButton(locator: Locator): Promise<void> {

        await locator.click();

    }

    async enterText(locator: Locator, text: string): Promise<void> {

        await locator.fill(text);
    }

    async selectVisibleOption(locator: Locator, value: string): Promise<void> {
        
        await locator.selectOption(value);
    }


    async getText(locator: Locator): Promise<string> {

        return await locator.innerText();

    }

}