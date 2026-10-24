import { Page } from "@playwright/test";
import{test as base,expect} from "@playwright/test" 
import { PageObjectManager } from "../pages/PageObjectManager";

type TestFixture = {pom:PageObjectManager};

export const test = base.extend<TestFixture>({

pom:async({page},use)=>{

const pom = new PageObjectManager(page)

await use(pom)
}
})
export {expect}
