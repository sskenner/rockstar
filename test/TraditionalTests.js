const internetPage = require('../pages/internet.page')
loginData = require("../data/loginData")

describe('Login page UI elements, login functionality, table sort, canvas chart, and dynamic content test', () => {
  // Login Page UI Elements Test - Test to ensure Login Page UI elements look OK
  it('should detect if logo image is existing', () => {
    console.log(browser.url(`${browser.options.baseUrl}`));
    expect(internetPage.logoImage.isExisting()).equals(true, 'expected logo image to exist');
  });
  it('should detect if auth header is existing', () => {
    expect(internetPage.authHeader.isExisting()).equals(true, 'expected auth header to exist');
  });
  it('should get correct auth header text', () => {
    expect(internetPage.authHeader.getText()).equals('Login Form', 'expected auth header text to be "Login Form"');
  });
  it('should detect if username form label is existing', () => {
    expect(internetPage.formLabelUsername.isExisting()).equals(true, 'expected username form label to exist');
  });
  it('should get correct username form label text', () => {
    expect(internetPage.formLabelUsername.getText()).equals('Username', 'expected username form label text to be "Username"');
  });
  it('should detect if username form input is existing', () => {
    expect(internetPage.username.isExisting()).equals(true, 'expected username form input to exist');
  });
  it('should detect if username form placeholder is correct', () => {
    expect(internetPage.username.getAttribute('placeholder')).equals('Enter your username', 'expected username form placeholder text to be "Enter your username"');
  });
  it('should detect if password form label is existing', () => {
    expect(internetPage.formLabelPassword.isExisting()).equals(true, 'expected password form label to exist');
  });
  it('should get correct password form label text', () => {
    expect(internetPage.formLabelPassword.getText()).equals('Password', 'expected password form label text to be "Password"');
  });
  it('should detect if password form input is existing', () => {
    expect(internetPage.password.isExisting()).equals(true, 'expected password form input to exist');
  });
  it('should detect if password form placeholder is correct', () => {
    expect(internetPage.password.getAttribute('placeholder')).equals('Enter your password', 'expected password form placeholder text to be "Enter your password"');
  });
  it('should detect if userMaleCircle icon is existing', () => {
    expect(internetPage.userMaleCircle.isExisting()).equals(true, 'expected userMaleCircle icon to exist');
  });
  it('should detect if fingerprint icon is existing', () => {
    expect(internetPage.fingerprint.isExisting()).equals(true, 'expected fingerprint icon to exist');
  });
  it('should detect if fingerprint icon is existing', () => {
    expect(internetPage.fingerprint.isExisting()).equals(true, 'expected fingerprint icon to exist');
  });
  it('should detect if login button is existing', () => {
    expect(internetPage.loginButton.isExisting()).equals(true, 'expected login button to exist');
  });
  it('should get correct login button text', () => {
    expect(internetPage.loginButton.getText()).equals('Log In', 'expected login button text to be "Log In"');
  });
  it('should detect if remember me checkbox is existing', () => {
    expect(internetPage.checkbox.isExisting()).equals(true, 'expected remember me checkbox to exist');
  });
  it('should detect if remember me checkbox style is correct', () => {
    expect(internetPage.checkbox.getAttribute('style')).equals('', 'expected remember me checkbox style to be ""');
  });
  it('should get correct remember me checkbox label text', () => {
    expect(internetPage.checkboxLabel.getText()).equals('Remember Me', 'expected remember me checkbox text to be "Remember Me"');
  });
  it('should detect if twitter button is existing', () => {
    expect(internetPage.twitterButton.isExisting()).equals(true, 'expected twitter button to exist');
  });
  it('should detect if twitter button src is correct', () => {
    expect(internetPage.twitterButton.getAttribute('src')).equals('https://demo.applitools.com/img/social-icons/twitter.png', 'expected twitter button src to be "img/social-icons/twitter.png"');
  });
  it('should detect if facebook button is existing', () => {
    expect(internetPage.facebookButton.isExisting()).equals(true, 'expected facebook button to exist');
  });
  it('should detect if facebook button src is correct', () => {
    expect(internetPage.facebookButton.getAttribute('src')).equals('https://demo.applitools.com/img/social-icons/facebook.png', 'expected facebook button src to be "img/social-icons/facebook.png"');
  });
  it('should detect if linkedin button is existing', () => {
    expect(internetPage.linkedinButton.isExisting()).equals(true, 'expected linkedin button to exist');
  });
  it('should detect if linkedin button src is correct', () => {
    expect(internetPage.linkedinButton.getAttribute('src')).equals('https://demo.applitools.com/img/social-icons/linkedin.png', 'expected linkedin button src to be "img/social-icons/linkedin.png"');
  });

  // Data-Driven Test - Tests for specific login functionality
  it('should enter username', () => {
    internetPage.enterUsername(loginData.username);
    browser.pause(1000);
    assert.equal(loginData.username, internetPage.username.getValue())
  });
  it("should clear username value", () => {
    internetPage.username.click();
    internetPage.username.clearValue();
    browser.pause(1000);
    assert.equal("", internetPage.username.getValue());
  });
  it('should enter password', () => {
    internetPage.enterPassword(loginData.password);
    browser.pause(1000);
    assert.equal(loginData.password, internetPage.password.getValue())
  });
  it("should clear password value", () => {
    internetPage.password.click();
    internetPage.password.clearValue();
    browser.pause(1000);
    assert.equal("", internetPage.password.getValue());
  });
  it('should detect if login error alert is displayed', () => {
    internetPage.clickLoginButton();
    browser.pause(1000);
    expect(internetPage.loginError.isDisplayed()).equals(true, 'expected login error alert to be displayed');
  });
  it('should get correct login error alert text', () => {
    expect(internetPage.loginError.getText()).equals('Both Username and Password must be present', 'expected login button text to be "Both Username and Password must be present"');
  });
  it('should detect if password is present error alert is displayed', () => {
    internetPage.enterUsername(loginData.username);
    internetPage.password.click();
    internetPage.password.clearValue();
    internetPage.clickLoginButton();
    browser.pause(1000);
    expect(internetPage.loginError.isDisplayed()).equals(true, 'expected login error alert to be displayed');
  });
  it('should detect if password is present error alert is correct', () => {
    browser.pause(1000);
    expect(internetPage.loginError.getText()).equals('Password must be present', 'expected login button text to be "Password must be present"');
  });
  it('should detect if username is present error alert is displayed', () => {
    internetPage.enterPassword(loginData.password);
    internetPage.username.click();
    internetPage.username.clearValue();
    internetPage.clickLoginButton();
    browser.pause(1000);
    expect(internetPage.loginError.isDisplayed()).equals(true, 'expected login error alert to be displayed');
  });
  it('should detect if username is present error alert is correct', () => {
    browser.pause(1000);
    expect(internetPage.loginError.getText()).equals('Username must be present', 'expected login button text to be "Username must be present"');
  });
  it('should login to app with username & password', () => {
    internetPage.enterUsername(loginData.username);
    internetPage.clickLoginButton();
    browser.pause(1000);
    expect(browser.getUrl()).equals("https://demo.applitools.com/hackathonApp.html");
    browser.pause(1000);
  });

  
  it('', () => {
    
  });

  // TODO: write tests for all elements on page

});