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
  it("Login page should look ok", async function() {
    try {
      browser.windowHandleFullscreen();
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
      // visual checkpoint 1
      await eyes.check("Login page", Target.window());

      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it("Login functionality should work as expected", async function() {
    try {
      browser.windowHandleFullscreen();
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Data-Driven Test",
        "Login page functionality works",
        viewportSize
      );
      // browser actions
      await eyes.check("login details not entered", Target.window());
      browser.click("#log-in");
      await eyes.check("was correct login details not entered error thrown", Target.window());
      browser.refresh();
      browser.setValue("#username", "Username");
      await eyes.check("username only entered", Target.window());
      browser.click("#log-in");
      await eyes.check("was correct username only error thrown", Target.window());
      browser.refresh();
      browser.setValue("#password", "Password");
      await eyes.check("password only entered", Target.window());
      browser.click("#log-in");
      await eyes.check("was correct password only error thrown", Target.window());
      browser.refresh();
      browser.setValue("#username", "Username");
      browser.setValue("#password", "Password");
      await eyes.check("complete login details entered", Target.window());
      browser.click("#log-in");
      await eyes.check("was login successful if complete login details were entered", Target.window());

      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it("Table Sort functionality should work as expected", async function() {
    try {
      browser.windowHandleFullscreen();
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Table Sort Test",
        "Table Sort functionality works and content is valid",
        viewportSize
      );
      // browser actions
      browser.setValue("#username", "Username");
      browser.setValue("#password", "Password");
      await eyes.check("login works", Target.window());
      browser.click("#log-in");
      await eyes.check("inital amount column sort order", Target.window());
      browser.click("thead th:nth-child(5)");
      await eyes.check("was amount column sorted in ascending order", Target.window());
      // browser.click("thead th:nth-child(5)");
      // await eyes.check("inital row cell alignment", Target.window());
      browser.click("thead th:nth-child(5)");
      await eyes.check("was table content kept intact", Target.window());

      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it("Canvas Chart functionality should work as expected", async function() {
    try {
      browser.windowHandleFullscreen();
      // const viewportSize = browser.getViewportSize();
      // Start the test and set the browser's viewport size to 

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Canvas Chart Test",
        "Canvas Chart data is valid & updates",
        // viewportSize
        { width: 1248, height:  851}
      );
      // browser actions
      // await eyes.check("Login page", Target.window());
      browser.setValue("#username", "Username");
      browser.setValue("#password", "Password");
      await eyes.check("login works", Target.window());
      browser.click("#log-in");
      // await eyes.check("inital amount column sort order", Target.window());
      await eyes.check("navigation works", Target.window());
      // browser.click("#log-in");
      browser.click("#showExpensesChart");
      await eyes.check("was data still valid", Target.window());
      // browser.click("thead th:nth-child(5)");
      // await eyes.check("inital row cell alignment", Target.window());
      browser.click("#addDataset");
      await eyes.check("was data added", Target.window());

      // end test
      await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
  it.only("Dynamic Content gifs should exist", async function() {
    
    // Navigate to URL.
    browser.url('https://demo.applitools.com/hackathon.html?showAd=true');

    try {
      browser.windowHandleFullscreen();
      
      const viewportSize = browser.getViewportSize();

      // set batch name & ID
      eyes.setBatch("Hackathon", "Modern Approach");

      // start test & set viewport
      await eyes.open(
        browser,
        "Dynamic Content Test",
        "Gifs are validated",
        viewportSize
      );
      // browser actions
      browser.setValue("#username", "Username");
      browser.setValue("#password", "Password");
      await eyes.check("login works", Target.window());
      browser.click("#log-in");
      await eyes.check("was gifs existing", Target.window());
      // TODO: test as layout region for changing gif

      browser.url('https://demo.applitools.com/hackathonV2.html?showAd=true');

      try {
        browser.windowHandleFullscreen();
        
        const viewportSize = browser.getViewportSize();
  
        // // set batch name & ID
        // eyes.setBatch("Hackathon", "Modern Approach");
  
        // start test & set viewport
        // await eyes.open(
        //   browser,
        //   "Dynamic Content Test",
        //   "Gifs are validated",
        //   viewportSize
        // );
        // browser actions
        browser.setValue("#username", "Username");
        browser.setValue("#password", "Password");
        await eyes.check("login works", Target.window());
        browser.click("#log-in");
        await eyes.check("was gifs existing", Target.window());
        // TODO: test as layout region for changing gif
      // end test
        await eyes.close();
      } finally {
        // if test aborts b4 eyes.close was called
        await eyes.abortIfNotClosed();
      }
      // end test
      // await eyes.close();
    } finally {
      // if test aborts b4 eyes.close was called
      await eyes.abortIfNotClosed();
    }
  });
});
