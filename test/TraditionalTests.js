const internetPage = require('../pages/internet.page')

describe('Traditional Tests', () => {
  it('Login Page UI Elements: Is the logo image displayed', () => {
    console.log(browser.url(`${browser.options.baseUrl}`));
    expect(internetPage.logoImage.isDisplayed()).equals(true);
  });
  it('Login Page UI Elements: Is the auth header displayed', () => {
    expect(internetPage.authHeader.isDisplayed()).equals(true);
  });
});