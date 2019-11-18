// initialize the eyes SDK
const { Eyes, Target } = require("@applitools/eyes.webdriverio");

const eyes = new Eyes();

// set your private API key
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

// Gather tests into separate groupings within the same file
describe("Applitools Visual Test", () => {
  // represents a single test case
  it("Page should look ok", async function() {
    // nav browser to web-site
    browser.url("https://applitools.com/helloworld?diff2");
    try {
      // set browser to fullscreen
      browser.windowHandleFullscreen();

      //  get the current size of the screen
      const viewportSize = browser.getViewportSize();

      // start the test and set the browser's viewport size to
      await eyes.open(
        browser,
        "Hello World Example",
        "Our First visual test",
        viewportSize
      );

      // visual checkpoint #1
      await eyes.check("Main Page", Target.window());

      //  click the "click me" button
      await browser.click("button");

      //  visual  checkpoint #2
      await eyes.check("Click!", Target.window());

      //  end the test
      await eyes.close();
    } finally {
      // if test was aborted b4 eyes.close was called ends the test as aborted
      await eyes.abortIfNotClosed();
    }
  });
});
