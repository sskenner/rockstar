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
      eyes.setBatch("Hackathon", "Batch 1");

      // start test & set viewport
      await eyes.open(
        browser,
        "Test Login Page UI",
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
});
