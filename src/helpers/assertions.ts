import { expect } from '@playwright/test';
import { Page, Locator } from 'playwright';

/**
 * Verifica se o texto de um elemento corresponde ao esperado.
 */
export async function expectText(page: Page, selector: string, expectedText: string) {
  const element = page.locator(selector);
  await expect(element).toHaveText(expectedText);
}

/**
 * Verifica se um elemento está visível na tela.
 */
export async function expectVisible(page: Page, selector: string) {
  const element = page.locator(selector);
  await expect(element).toBeVisible();
}

/**
 * Verifica se o valor de um input é o esperado.
 */
export async function expectInputValue(locator: Locator, expected: string) {
  await expect(locator).toHaveValue(expected);
}

/**
 * Verifica se a URL atual contém um trecho esperado.
 */
export async function expectUrlContains(page: Page, substring: string) {
  await expect(page).toHaveURL(new RegExp(substring));
}
