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

    get hambergurButton () {
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get logoutButton () {
        return $('//a[@id="logout_sidebar_link"]');
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
        //await expect(this.productsHeader).toExist();
        // await this.hambergurButton.click();
        // await this.logoutButton.click();
        // await expect(this.btnSubmit).toExist();
        await expect(this.epicSadFace).toExist();

        

    }

open () {
        return super.open('');
    }
}

export default new LoginPage();
