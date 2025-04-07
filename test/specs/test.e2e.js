import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        // await LoginPage.PositiveNegative('standard_user', 'secret_sauce')
        // await LoginPage.PositiveNegative('performance_glitch_user', 'secret_sauce')
        // await LoginPage.PositiveNegative('problem_user', 'secret_sauce')
        // await LoginPage.PositiveNegative('error_user', 'secret_sauce')
        // await LoginPage.PositiveNegative('visual_user', 'secret_sauce')
        await LoginPage.PositiveNegative('locked_out_user', 'secret_sauce')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('Swag Labs'))
    })
})

