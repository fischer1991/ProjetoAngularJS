exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['../SpecFiles/*.js'],
    params:
        {
            commom:
                {
                    browserDetails:
                        {
                            url:"http://amasik.com/demo/angularjs/angular-app"
                        }
                },
            registration:
                {
                    firstName:"Luiz",
                    lastName:"Fischer",
                    email:"luizfischer@hotmail.com",
                    password:"luiz123"
                },
            login:
                {
                    username:"luizfischer@hotmail.com",
                    password:"luiz123"
                }
        }
}