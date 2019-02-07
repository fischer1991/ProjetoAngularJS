describe("Cenário de Cadastro e Login",function()
    {

        it("Cadastro de novo usuário", function () {
            var element = require('../ElementLocators/Elements.json')
            browser.get(browser.params.commom.browserDetails.url)
            browser.driver.manage().window().maximize()
            browser.findElement(by.partialLinkText(element.login.login_register)).click()
            browser.driver.sleep(3000)
            browser.findElement(by.name(element.registration.register_firstname)).sendKeys(browser.params.registration.firstName)
            browser.findElement(by.name(element.registration.register_lastname)).sendKeys(browser.params.registration.lastName)
            browser.findElement(by.name(element.registration.register_email)).sendKeys(browser.params.registration.email)
            browser.findElement(by.name(element.registration.register_password)).sendKeys(browser.params.registration.password)
            browser.findElement(by.id('confirm_password')).sendKeys(browser.params.registration.password)
            browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
            browser.findElement(by.buttonText('Register')).click()
            browser.driver.sleep(3000)
        });

        it("Login", function () {
            browser.findElement(by.model('login.email')).clear()
            browser.findElement(by.model('login.email')).sendKeys(browser.params.login.username)
            browser.findElement(by.model('login.password')).sendKeys(browser.params.login.password)
            browser.findElement(by.className('button btn btn-success btn-large')).click()
            browser.driver.sleep(3000)
            browser.findElement(by.xpath('//a[@class="dropdown-toggle"])[2]').click()
            browser.findElement(by.xpath('//a[@ui-sref="logout"]')).click()
            browser.driver.sleep(3000)
        });
    });