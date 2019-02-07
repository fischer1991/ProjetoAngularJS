describe("Cenário de Login",function()
{

    it("Cadastro de novo usuário", function () {

        browser.driver.manage().window().maximize()
        browser.findElement(by.partialLinkText('have an account?')).click()
        browser.driver.sleep(4000)
        browser.findElement(by.name('firstname')).sendKeys('Luiz')
        browser.findElement(by.name('lastname')).sendKeys('Fischer')
        browser.findElement(by.name('email')).sendKeys('luizfischer@hotmail.com')
        browser.findElement(by.name('password')).sendKeys('luiz123')
        browser.findElement(by.id('confirm_password')).sendKeys('luiz123')
        browser.findElement(by.xpath('//label[text()="Agree with the Terms and Conditions."]')).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(4000)
    });

    it("Login", function () {

        browser.driver.sleep(4000)
        browser.findElement(by.model('login.email')).clear()
        browser.findElement(by.model('login.email')).sendKeys(browser.params.login.username)
        browser.findElement(by.model('login.password')).sendKeys(browser.params.login.password)
        browser.findElement(by.className('button btn btn-success btn-large')).click()
        browser.driver.sleep(4000)
        });
});