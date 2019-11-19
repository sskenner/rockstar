const internetPage = require("../../pages/internet.page");
loginData = require("../../data/loginData");

// initialize eyes SDK
const { Eyes, Target } = require("@applitools/eyes.webdriverio");

const eyes = new Eyes();

// set private API key
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

// gather tests into separate groupings
describe("Batches", () => {
  // single test case
  it("Page should look ok", async function() {
  // it("Page should look ok", () => {
    // browser.url(`${browser.options.baseUrl}`);
    // browser.url("https://demo.applitools.com/hackathon.html");

    try {
      browser.windowHandleFullscreen();
      // browser.takeSnapshot('Hackathon Test');
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Login Page UI Test",
        "Visual elements exist",
        viewportSize
      );
      // await eyes.open(
      //   browser,
      //   "Test Login Page UI",
      //   "Visual elements exist"
      // );
      // visual checkpoint 1
      await eyes.check("Login page", Target.window());

      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it("Error should be thrown if login details are missing", async function() {
  
    try {
      browser.windowHandleFullscreen();
      // browser.takeSnapshot('Hackathon Test');
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Data-Driven Test",
        "Error thrown if login details are missing",
        viewportSize
      );
      // browser actions
      browser.click("#log-in");
      await eyes.check("Login page", Target.window());
      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it.only("Error should be thrown if only enter username", async function() {
  
    try {
      browser.windowHandleFullscreen();
      // browser.takeSnapshot('Hackathon Test');
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Data-Driven Test Username only",
        "Error thrown if ontly the username is entered",
        viewportSize
      );
      // browser actions
      // browser.waitForVisible("#username");
      browser.setValue("#username", "Username");
      // browser.pause(5000);
      // browser.waitUntil(function () {
      //   return browser.getText("#username") === "Username"
      // }, 2000, 'expected text to be visible after 2s');
      await eyes.check("Login page 2", Target.window());
      browser.click("#log-in");
      await eyes.check("Login page 3", Target.window());
      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
});
