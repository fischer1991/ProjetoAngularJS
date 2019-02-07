var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['../SpecFiles/*.js'],
    params:
        {
            testdata : require('../ElementLocators/Elements.json')
        },

    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    }
}
