const internetPage = require("../pages/internet.page");
loginData = require("../data/loginData");

describe("Traditional Approach", () => {
  // Test to ensure Login Page UI elements look OK
  describe('Login Page UI suite', () => {
    describe('Visusal regression comparison', () => {
      beforeEach(() => {
        browser.url(`${browser.options.baseUrl}`);
      });
      it("should save some screenshots", () => {
        // browser.url(`${browser.options.baseUrl}`);
        // Save a screen
        browser.saveScreen("examplePagedLogin", {
          /* some options*/
        });
    
        // // Save an element
        // browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options*/ });
    
        // Save a full page screens
        browser.saveFullPageScreen("fullPageLogin", {
          /* some options*/
        });
      });
      it("should compare successful for a baseline with existing elements", () => {
        // browser.url('https://demo.applitools.com/hackathonChartV2.html');
        // TODO: rmv for test verification ONLY
        // browser.url(`${browser.options.baseUrl}`);
        // browser.pause(5000);
  
        // Check a full page screens
        expect(
          browser.checkFullPageScreen("fullPageLogin", {
            /* some options*/
          })
        ).equals(0, "expected chart to remain the same");
      });
    });
    describe('Visual elements existance test', () => {
      it("should detect if logo image exists", () => {
        console.log(browser.url(`${browser.options.baseUrl}`));
        expect(internetPage.logoImage.isExisting()).equals(
          true,
          "expected logo image to exist"
        );
      });
      it("should detect if auth header exists", () => {
        expect(internetPage.authHeader.isExisting()).equals(
          true,
          "expected auth header to exist"
        );
      });
      it("should detect if username form label exists", () => {
        expect(internetPage.formLabelUsername.isExisting()).equals(
          true,
          "expected username form label to exist"
        );
      });
      it("should detect if username form input exists", () => {
        expect(internetPage.username.isExisting()).equals(
          true,
          "expected username form input to exist"
        );
      });
      it("should detect if password form label exists", () => {
        expect(internetPage.formLabelPassword.isExisting()).equals(
          true,
          "expected password form label to exist"
        );
      });
      it("should detect if password form input exists", () => {
        expect(internetPage.password.isExisting()).equals(
          true,
          "expected password form input to exist"
        );
      });
      it("should detect if userMaleCircle icon exists", () => {
        expect(internetPage.userMaleCircle.isExisting()).equals(
          true,
          "expected userMaleCircle icon to exist"
        );
      });
      it("should detect if fingerprint icon exists", () => {
        expect(internetPage.fingerprint.isExisting()).equals(
          true,
          "expected fingerprint icon to exist"
        );
      });
      // it("should detect if fingerprint icon exists", () => {
      //   expect(internetPage.fingerprint.isExisting()).equals(
      //     true,
      //     "expected fingerprint icon to exist"
      //   );
      // });
      it("should detect if login button exists", () => {
        expect(internetPage.loginButton.isExisting()).equals(
          true,
          "expected login button to exist"
        );
      });
      it("should detect if remember me checkbox exists", () => {
        expect(internetPage.checkbox.isExisting()).equals(
          true,
          "expected remember me checkbox to exist"
        );
      });
      it("should detect if twitter button exists", () => {
        expect(internetPage.twitterButton.isExisting()).equals(
          true,
          "expected twitter button to exist"
        );
      });
      it("should detect if facebook button exists", () => {
        expect(internetPage.facebookButton.isExisting()).equals(
          true,
          "expected facebook button to exist"
        );
      });
      it("should detect if linkedin button exists", () => {
        expect(internetPage.linkedinButton.isExisting()).equals(
          true,
          "expected linkedin button to exist"
        );
      });
    });
    describe('Visual elements format test', () => {
      it("should detect if remember me checkbox style is correct", () => {
        expect(internetPage.checkbox.getAttribute("style")).equals(
          "",
          'expected remember me checkbox style to be ""'
        );
      });
    });
    describe('Label elements text validation test', () => {
      it("should get correct auth header text", () => {
        expect(internetPage.authHeader.getText()).equals(
          "Login Form",
          'expected auth header text to be "Login Form"'
        );
      });
      
      it("should get correct username form label text", () => {
        expect(internetPage.formLabelUsername.getText()).equals(
          "Username",
          'expected username form label text to be "Username"'
        );
      });
      it("should get correct password form label text", () => {
        expect(internetPage.formLabelPassword.getText()).equals(
          "Password",
          'expected password form label text to be "Password"'
        );
      });
      it("should get correct login button text", () => {
        expect(internetPage.loginButton.getText()).equals(
          "Log In",
          'expected login button text to be "Log In"'
        );
      });
      it("should get correct remember me checkbox label text", () => {
        expect(internetPage.checkboxLabel.getText()).equals(
          "Remember Me",
          'expected remember me checkbox text to be "Remember Me"'
        );
      });
    });
    describe('Form elements text validation test', () => {
      it("should detect if username form placeholder is correct", () => {
        expect(internetPage.username.getAttribute("placeholder")).equals(
          "Enter your username",
          'expected username form placeholder text to be "Enter your username"'
        );
      });
      it("should detect if password form placeholder is correct", () => {
        expect(internetPage.password.getAttribute("placeholder")).equals(
          "Enter your password",
          'expected password form placeholder text to be "Enter your password"'
        );
      });
    });
    // describe('Image elements source test', () => {
    //   it("should detect if twitter button src is correct", () => {
    //     expect(internetPage.twitterButton.getAttribute("src")).equals(
    //       "https://demo.applitools.com/img/social-icons/twitter.png",
    //       'expected twitter button src to be "img/social-icons/twitter.png"'
    //     );
    //   });
    //   it("should detect if facebook button src is correct", () => {
    //     expect(internetPage.facebookButton.getAttribute("src")).equals(
    //       "https://demo.applitools.com/img/social-icons/facebook.png",
    //       'expected facebook button src to be "img/social-icons/facebook.png"'
    //     );
    //   });
    //   it("should detect if linkedin button src is correct", () => {
    //     expect(internetPage.linkedinButton.getAttribute("src")).equals(
    //       "https://demo.applitools.com/img/social-icons/linkedin.png",
    //       'expected linkedin button src to be "img/social-icons/linkedin.png"'
    //     );
    //   });
    // });
  });
  
  // Test to ensure specific login functionality
  describe('Data-Driven suite', () => {
    describe('Form data entry test', () => {
      it("should enter username", () => {
        internetPage.enterUsername(loginData.username);
        // browser.pause(1000);
        assert.equal(loginData.username, internetPage.username.getValue());
      });
      it("should enter password", () => {
        internetPage.enterPassword(loginData.password);
        // browser.pause(1000);
        assert.equal(loginData.password, internetPage.password.getValue());
      });
      it("should clear username value", () => {
        // internetPage.enterUsername(loginData.username);
        internetPage.username.click();
        internetPage.username.clearValue();
        // browser.pause(1000);
        assert.equal("", internetPage.username.getValue());
      });
      it("should clear password value", () => {
        // internetPage.enterPassword(loginData.password);
        internetPage.password.click();
        internetPage.password.clearValue();
        // browser.pause(1000);
        assert.equal("", internetPage.password.getValue());
      });
    });
    describe('Login error alert display test', () => {
      it("should detect if login error alert is displayed", () => {
        internetPage.clickLoginButton();
        // browser.pause(1000);
        expect(internetPage.loginError.isDisplayed()).equals(true,"expected login error alert to be displayed");
      });
      it("should get correct login error alert text", () => {
        expect(internetPage.loginError.getText()).equals(
          "Both Username and Password must be present",
          'expected login button text to be "Both Username and Password must be present"'
        );
      });
      it("should detect if password is present error alert is displayed", () => {
        internetPage.enterUsername(loginData.username);
        internetPage.password.click();
        internetPage.password.clearValue();
        internetPage.clickLoginButton();
        // browser.pause(1000);
        expect(internetPage.loginError.isDisplayed()).equals(
          true,
          "expected login error alert to be displayed"
        );
      });
      it("should detect if password is present error alert is correct", () => {
        // browser.pause(1000);
        expect(internetPage.loginError.getText()).equals(
          "Password must be present",
          'expected login button text to be "Password must be present"'
        );
      });
      it("should detect if username is present error alert is displayed", () => {
        internetPage.enterPassword(loginData.password);
        internetPage.username.click();
        internetPage.username.clearValue();
        internetPage.clickLoginButton();
        // browser.pause(1000);
        expect(internetPage.loginError.isDisplayed()).equals(
          true,
          "expected login error alert to be displayed"
        );
      });
      it("should detect if username is present error alert is correct", () => {
        // browser.pause(1000);
        expect(internetPage.loginError.getText()).equals(
          "Username must be present",
          'expected login button text to be "Username must be present"');
      });
    });
    describe('Successful login test', () => {
      it("should login to app with username & password", () => {
        // browser.url(`${browser.options.baseUrl}`)
        internetPage.enterUsername(loginData.username);
        internetPage.enterPassword(loginData.username);
        internetPage.clickLoginButton();
        // browser.pause(1000);
        expect(internetPage.userAvatar.isExisting()).equals(
          true,
          "expected avatar image to exist"
        );
        // browser.pause(1000);
      });
    });    
  });
  
  //  Test to ensure correct table sorting
  describe('Table Sort test suite', () => {
    it("should sort amount column in ascending order", () => {
      browser.url(`${browser.options.baseUrl}`)
      internetPage.enterUsername(loginData.username);
      internetPage.enterPassword(loginData.username);
      internetPage.clickLoginButton();
      // // TODO: rmv for test verification ONLY
      // console.log(internetPage.getColumnText());
      // console.log(internetPage.getColumnTextSorted());
      //
      let unSorted = internetPage.getColumnText();
      console.log(unSorted);
      //
      let sorted = internetPage.getColumnTextSorted();
      // let sorted = [ '-244.00', '-320.00', '1250.00', '17.99', '340.00', '952.23' ];
      console.log(sorted);
      let sortedClick = internetPage.getColumnTextClick();
      // TODO: rmv for test verification ONLY
      console.log(sortedClick);
      var is_same =
        sorted.length == sortedClick.length &&
        sorted.every(function(element, index) {
          return element === sortedClick[index];
        });
      console.log(is_same);
      // //
      expect(is_same).equals(
        true,
        "expected column amount data to be sorted in ascending order"
      );
    });
    it("should keep data in tact after sorting", () => {
      // // TODO: rmv for test verification ONLY
      // console.log(internetPage.getRowText());
      let unSorted = internetPage.getRowText();
      console.log(unSorted);
      let sorted = internetPage.getRowTextSorted();
      // TODO: rmv for test verification ONLY
      console.log(sorted);
      console.log(internetPage.areArraysEqualSets(unSorted, sorted));
      //
      expect(internetPage.areArraysEqualSets(unSorted, sorted)).equals(
        true,
        "expected data to be in tact after sort"
      );
    });
  });

  // Tests to ensure the addition of 2019 data
  describe('Canvas Chart test suite', () => {
    beforeEach(() => {
      browser.url(`${browser.options.baseUrl}`);
    });
    it("should save some screenshots", () => {
      internetPage.enterUsername(loginData.username);
      internetPage.enterPassword(loginData.username);
      internetPage.clickLoginButton();
      internetPage.compareExpenses.click();
      // Save a screen
      browser.saveScreen("examplePagedCompareExpenses", {
        /* some options*/
      });
  
      // // Save an element
      // browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options*/ });
  
      // Save a full page screens
      browser.saveFullPageScreen("fullPageCompareExpenses", {
        /* some options*/
      });
    });
    it("should compare successful with a baseline chart", () => {
      // browser.url('https://demo.applitools.com/hackathonChartV2.html');
      // TODO: rmv for test verification ONLY
      // browser.url(`${browser.options.baseUrl}`);
      internetPage.enterUsername(loginData.username);
      internetPage.enterPassword(loginData.username);
      internetPage.clickLoginButton();
      internetPage.compareExpenses.click();
      // browser.pause(5000);

      // Check a full page screens
      expect(
        browser.checkFullPageScreen("fullPageCompareExpenses", {
          /* some options*/
        })
      ).equals(0, "expected chart to remain the same");
    });
    it("should compare un-successful with a baseline chart", () => {
      // browser.url('https://demo.applitools.com/hackathonChartV2.html');
      // TODO: rmv for test verification ONLY
      // browser.url(`${browser.options.baseUrl}`);
      internetPage.enterUsername(loginData.username);
      internetPage.enterPassword(loginData.username);
      internetPage.clickLoginButton();
      internetPage.compareExpenses.click();
      internetPage.addDataSet.click();
      // Check a full page screens
      expect(
        browser.checkFullPageScreen("fullPageCompareExpenses", {
          /* some options*/
        })
      ).not.equals(0, "expected chart to have changed");
    });
  });

  // Tests to ensure display ads display
  describe('Dynamic Content test', () => {
    it('should check that ad1 exists', () => {
      browser.url(`${browser.options.baseUrl}?showAd=true`);
      internetPage.enterUsername(loginData.username);
      internetPage.enterPassword(loginData.username);
      internetPage.clickLoginButton();
      // console.log(internetPage.flashSale1.isExisting());
      expect(internetPage.flashSale1.isExisting()).equals(
        true,
        "expected ad1 to exist");
    });
    it('should check that ad2 exists', () => {
      // TODO: rmv for test verification ONLY
      // browser.url(`${browser.options.baseUrl}?showAd=true`);
      // internetPage.enterUsername(loginData.username);
      // internetPage.enterPassword(loginData.username);
      // internetPage.clickLoginButton();
      ////
      // console.log(internetPage.flashSale2.isExisting());
      expect(internetPage.flashSale2.isExisting()).equals(
        true,
        "expected ad2 to exists");
    });
  });
});
