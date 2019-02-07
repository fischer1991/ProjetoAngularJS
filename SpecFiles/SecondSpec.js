describe("Cenário de Login",function()
{

    it("Cadastro de novo usuário", function () {
        browser.get("http://amasik.com/demo/angularjs/angular-app")
        browser.driver.manage().window().maximize()
        browser.findElement(by.partialLinkText(browser.params.testdata.login.login_register)).click()
        browser.driver.sleep(4000)
        browser.findElement(by.name(browser.params.testdata.registration.register_firstname)).sendKeys('Luiz')
        browser.findElement(by.name(browser.params.testdata.registration.register_lastname)).sendKeys('Fischer')
        browser.findElement(by.name('email')).sendKeys('luizfischer@hotmail.com')
        browser.findElement(by.name('password')).sendKeys('luiz123')
        browser.findElement(by.id('confirm_password')).sendKeys('luiz123')
        browser.findElement(by.xpath('//label[text()="Agree with the Terms and Conditions."]')).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(4000)
    });

});