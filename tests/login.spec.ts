import playwrightConfig from "../playwright.config";
import {test,expect} from "../fixtures/TestFixture"

import { LoginHotel } from "../pages/loginHotel";

import { PageObjectManager } from "../pages/PageObjectManager";

test('Hotel page login',async ({pom})=>{

//let loginHotel = new LoginHotel(page);

//const pom = new PageObjectManager(page)

 await pom.loginHotel.homePage()

 await pom.loginHotel.build2Page()

 await pom.loginHotel.login("Devanath1","deva123")

//console.log(page.user1);.

})