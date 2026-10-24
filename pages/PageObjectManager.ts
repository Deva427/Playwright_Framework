import{Page} from '@playwright/test'
import { LoginHotel } from './loginHotel'
import { BasePage } from './BasePage';

export class PageObjectManager {

readonly loginHotel:LoginHotel

constructor(page:Page){

 this.loginHotel = new LoginHotel(page);

}









}