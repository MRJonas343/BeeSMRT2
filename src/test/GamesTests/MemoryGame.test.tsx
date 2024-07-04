import { test } from "@playwright/test"

test("test", async ({ page }) => {
	await page.goto("https://beesmrt2.vercel.app/")
	await page.getByRole("link", { name: "Memory Game Memory Game Find" }).click()
	await page
		.getByRole("link", { name: "Single Player Play" })
		.getByRole("button")
		.click()
	await page.getByRole("button", { name: "Close" }).click()
	await page
		.getByRole("button", { name: "Introductions and Greetings" })
		.click()
	await page.locator(".cardBack").first().click()
	await page.locator("div:nth-child(2) > .cardBack").click()
	await page.locator("div:nth-child(7)").click()
	await page.locator("div:nth-child(8) > .cardBack").click()
	await page.getByRole("link", { name: "logo" }).click()
})
