let selection;

class My_Account_Page {
    // ---- start of creation of page object model params----
    //Page elements
    get welcomeText() { return $('h1*=Hi'); }
    get bookingsButton() { return $('=Bookings'); }
    get myProfileButton() { return $('=My Profile'); }
    get wishlistButton() { return $('=Wishlist'); }
    get newsletterButton() { return $('=Newsletter'); }

    get bookingIdText() { return $('=Booking ID'); }
    
    setSelection(selection) {
        this.selection = selection;
    }
    getSelection() {
        return this.selection;
    }

    // functions
    pageIsVisible() {
        this.welcomeText.waitForDisplayed();
    }

    selectArea(area) {
        this.setSelection(area);
        switch (area) {
            case 'bookings':
                this.bookingsButton.click();
                break;
            case 'my profile':
                this.myProfileButton.click();
                break;
            case 'wishlist':
                this.wishlistButton.click();
                break;
            case 'newsletter':
                this.newsletterButton.click();
                break;
            default:
                console.log('nothing selected');
        }
    }
}

module.exports = new My_Account_Page();