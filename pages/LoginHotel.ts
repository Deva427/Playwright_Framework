import test from "node:test";
import { Page, Locator } from "@playwright/test"
import { BasePage } from "./BasePage";

export class LoginHotel extends BasePage{

   // readonly page: Page
    readonly build2: Locator
    readonly username: Locator
    readonly password: Locator
    readonly loginbtn:Locator

    constructor(page: Page) {

        super(page)
        this.build2   = page.getByText('Go to Build 2 ')
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.loginbtn = page.locator('#login')

    }

    async homePage(): Promise<void> {

        await this.LoadUrl('');
        
    }

    async build2Page(): Promise<void> {

        await this.clickButton(this.build2);
    }

    async login(username: string, password: string): Promise<void> {

await this.enterText(this.username,username)
await this.enterText(this.password,password)
await this.clickButton(this.loginbtn)

      //  return user1;

    }

}
