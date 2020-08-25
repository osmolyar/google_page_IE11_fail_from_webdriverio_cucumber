import { Given, When, Then } from 'cucumber';
const Home_Page = require('../pageObjects/home_page.js');
const My_Account = require('../pageObjects/myAccount_page.js');
const test_data = require('../testdata/testdata.js')


Given(/^the user is on their account page$/, function () {
    browser.url('/account/');
    //if login page is shown then login
    if (Home_Page.my_account_button){
        Home_Page.loginToMyAccount(test_data.username, test_data.password);
        My_Account.bookingsButton.waitForDisplayed();
    }
    expect(browser.getUrl()).toBe('https://www.phptravels.net/account/');
});

When(/^the user selects to access "([^"]*)"$/, function (area) {
  My_Account.selectArea(area);

});

Then(/^the user will see the "([^"]*)"$/, function (area) {
    switch (area) {
        case 'bookings':
            expect(My_Account.bookingIdText).toBeDisplayed;
            break;
        case 'my profile':
            
            break;
        case 'wishlist':
            
            break;
        case 'newsletter':
            
            break;
        default:
            console.log('nothing selected');
    }
});