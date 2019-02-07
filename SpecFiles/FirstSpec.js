describe("Cenário de Cadastro e Login",function()
    {

        it("Cadastro de novo usuário", function () {
            browser.get(browser.params.commom.browserDetails.url)
            browser.driver.manage().window().maximize()
            browser.findElement(by.partialLinkText('have an account?')).click()
            browser.driver.sleep(4000)
            browser.findElement(by.name('firstname')).sendKeys(browser.params.registration.firstName)
            browser.findElement(by.name('lastname')).sendKeys(browser.params.registration.lastName)
            browser.findElement(by.name('email')).sendKeys(browser.params.registration.email)
            browser.findElement(by.name('password')).sendKeys(browser.params.registration.password)
            browser.findElement(by.id('confirm_password')).sendKeys(browser.params.registration.password)
            browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
            browser.findElement(by.buttonText('Register')).click()
            browser.driver.sleep(4000)
        });

        it("Login", function () {
            browser.findElement(by.model('login.email')).clear()
            browser.findElement(by.model('login.email')).sendKeys(browser.params.login.username)
            browser.findElement(by.model('login.password')).sendKeys(browser.params.login.password)
            browser.findElement(by.className('button btn btn-success btn-large')).click()
            browser.driver.sleep(4000)
            browser.findElement(by.xpath('//a[@class="dropdown-toggle"])[2]').click()
            browser.findElement(by.xpath('//a[@ui-sref="logout"]')).click()
            browser.driver.sleep(4000)
        });
    });