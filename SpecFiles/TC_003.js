
    beforeEach(function(){
        browser.get("http://amasik.com/demo/angularjs/angular-app/")
        console.log("**********Test Case Started******************")
    });

    afterEach(function(){
        console.log("**********Test Case Ended******************")
    })

    it("Login Data", function(){

        browser.driver.manage().window().maximize()
        browser.findElement(by.model('login.email')).clear()
        browser.findElement(by.model('login.email')).sendKeys("Hello")
        browser.findElement(by.model('login.password')).sendKeys("Hello")
    });

    it("Register User", function(){

        browser.findElement(by.partialLinkText('have an account?')).click()
        browser.driver.sleep(3000)
        browser.findElement(by.name('firstname')).sendKeys("Luiz")
        browser.findElement(by.name('lastname')).sendKeys("Fischer")
        browser.findElement(by.name('email')).sendKeys("luizfischer@hotmail.com")
        browser.findElement(by.name('password')).sendKeys("luiz123")
        browser.findElement(by.id('confirm_password')).sendKeys("luiz123")
        browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
        browser.findElement(by.buttonText('Register')).click()
        browser.driver.sleep(3000)

    });

