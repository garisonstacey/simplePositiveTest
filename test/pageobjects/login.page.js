import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('//input[@id="password"]');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

     get productsHeader () {
        return $('//span[@class="title"][contains(text(), "Products")]');
    }

    get shoppingCart () {
        return $('//a[@class="shopping_cart_link"]');
    }

    get hambergurButton () {
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get allItems () {
        return $('//a[@id="inventory_sidebar_link"]');
    }

    get about () {
        return $('//a[@id="about_sidebar_link"]');
    }

    get cartAddition () {
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]');
    }

    get resetApp () {
        return $('//a[@id="reset_sidebar_link"]');
    }

    get logOut () {
        return $('//a[@id="logout_sidebar_link"]');
    }

    get xButton () {
        return $('//button[@id="react-burger-cross-btn"]');
    }

    get epicSadFace () {
        return $('.error-message-container');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    

    async PositiveNegative (username, password) {
        await this.login(username, password)
        await expect(this.productsHeader).toExist();
        await this.shoppingCart.click();
         await this.hambergurButton.click();
         await this.allItems.click();
         await this.hambergurButton.click();
         await this.about.click();
         await browser.url(`https://www.saucedemo.com/`)
         await this.login(username, password)
        await expect(this.productsHeader).toExist();
        await this.hambergurButton.click();
        await this.cartAddition.click();
        await this.hambergurButton.click();
        await this.hambergurButton.click();
        await this.resetApp.click();
        await expect(this.shoppingCart).toExist();
        await this.logOut.click();




        // //  await this.hambergurButton.click();

        //   await this.logoutButton.click();
        //   await expect(this.btnSubmit).toExist();
        //  await expect(this.epicSadFace).toExist();




        

    }

open () {
        return super.open('');
    }
}

export default new LoginPage();
