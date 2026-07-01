const { test, expect } = require("playwright/test");

test("capture settled home hero", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Bring Your Story To Life"
  );
  await page.screenshot({ path: ".playwright-home-settled.png" });
});
