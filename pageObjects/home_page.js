class Home_Page {
    // ---- start of creation of page object model params----
    //Page elements

    //using link text
    // get my_account_button() { return $('*=My Account'); }
    get my_account_button() { return $('.dropdown-login > a:nth-child(1)'); }
    get login_button() { return $("button.btn:nth-child(4)"); }
        get signin_button() { return $("button.btn:nth-child(4)"); }
    // get signin_button() { return $('=Login'); }

    // get email_input() { return $("input[name='username']");}
        get email_input() { return $("div.form-group:nth-child(1) > label:nth-child(1) > input:nth-child(1)");}

    // get password_input() { return $("input[name='password']");}
        get password_input() { return $("div.wow:nth-child(3) > div:nth-child(2) > label:nth-child(1) > input:nth-child(1)");}
    // get login_button() { return $("//button[.='Login']"); }



    get welcome_text(){return $('h3=Hi, Demo User')}

    get loginText() {return $('[name=IRISUsername]')};
    get loginPassword() {return $('[name=IRISPassword]')};
    get loginButton() {return $('[name=IRISLogin]');}
    get flashText() {return $(`/html/body/table[2]/tbody/tr/td/table/tbody/tr[3]/td/center/p[2]/b/font`)};

    // functions
    setUsername(username) {
        // return this.email_input.setValue(username);
        return this.loginText.setValue(username);
    }

    setPassword(password) {   
        // return this.password_input.setValue(password);
        return this.loginPassword.setValue(password);
    }

    clickLoginButton() {
        return this.loginButton.click();
    };

    loginToMyAccount(username,password){
        this.my_account_button.click();
        this.signin_button.click();
        this.setUsername(username);
        this.setPassword(password);
        this.clickLoginButton();
    }
}

module.exports = new Home_Page();