const internetPage = require('../pages/internet.page')

describe('Test to ensure Login Page UI elements look OK', () => {
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
  it('should detect if auth header css property is existing', () => {
    // webdriver unable to test pseudo element "::after"
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
  it('should detect if username form placeholder is existing', () => {
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
  it('should detect if password form placeholder is existing', () => {
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
    expect(internetPage.login.isExisting()).equals(true, 'expected login button to exist');
  });
  it('should get correct login button text', () => {
    expect(internetPage.login.getText()).equals('Log In', 'expected login button text to be "Log In"');
  });
  it('should detect if remember me checkbox is existing', () => {
    expect(internetPage.checkbox.isExisting()).equals(true, 'expected remember me checkbox to exist');
  });
  it('should get correct remember me checkbox label text', () => {
    expect(internetPage.checkboxLabel.getText()).equals('Remember Me', 'expected remember me checkbox text to be "Remember Me"');
  });

  // TODO: write tests for all elements on page

});