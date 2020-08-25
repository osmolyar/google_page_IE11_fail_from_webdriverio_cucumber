import { Given, When, Then } from 'cucumber';
const Home_Page = require('../pageObjects/home_page.js');
const test_data = require('../testdata/testdata.js');
import  HomePage from '../pageObjects/googleHome.page';
let homepage=new HomePage();
let URL='https://google.com';


Given(/^the user is on the home page and selects to login$/, function () {
    browser.url('/');
    Home_Page.my_account_button.click();
    Home_Page.signin_button.click();
    expect(browser.getUrl()).toBe('https://www.phptravels.net/login');

    // expect(Login_Page.loginLabel).to.be('Login');
});

Given(/^the user is on the IRIS home page and selects to login$/, function () {
    browser.url('http://redhatlinux1:52773/csp/sys/UtilHome.csp');
    Home_Page.setUsername("_SYSTEM");
    Home_Page.setPassword("SYS");
    Home_Page.loginButton.click();
    browser.pause(5000);
    expect(browser.getTitle()).toContain('Home');

    // expect(Login_Page.loginLabel).to.be('Login');
});

When(/^the user enters valid credentials$/, function () {
   Home_Page.setUsername(test_data.username);
   Home_Page.setPassword(test_data.password);
   Home_Page.clickLoginButton();

});

Then(/^the user will be logged into the site$/, function () {
    expect(Home_Page.welcome_text).toBeDisplayed();
});

