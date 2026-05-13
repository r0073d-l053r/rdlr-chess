const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const fileUrl = 'file://' + path.resolve('index.html');
  await page.goto(fileUrl);

  const duration = await page.evaluate(() => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      game.render();
    }
    return performance.now() - start;
  });

  console.log(`Render 1000 times took: ${duration.toFixed(2)} ms`);
  await browser.close();
})();
