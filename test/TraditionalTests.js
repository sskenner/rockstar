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

  // TODO: write tests for all elements on page

});