const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const fileUrl = 'file://' + path.resolve('index.html');
  await page.goto(fileUrl);

  // Wait for board to be visible
  await page.waitForSelector('#board');

  // Verify there are 64 squares
  const squaresCount = await page.$$eval('.square', squares => squares.length);
  if (squaresCount !== 64) {
    console.error(`Expected 64 squares, but found ${squaresCount}`);
    process.exit(1);
  } else {
    console.log("64 squares successfully found.");
  }

  await browser.close();
})();
