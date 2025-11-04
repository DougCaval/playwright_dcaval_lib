import { Page } from 'playwright';

/**
 * Clica em um seletor e espera o carregamento de rede estabilizar.
 */
export async function clickAndWait(page: Page, selector: string) {
  await Promise.all([
    page.waitForLoadState('networkidle'),
    page.click(selector),
  ]);
}

/**
 * Digita um texto em um campo, limpando antes.
 */
export async function clearAndType(page: Page, selector: string, text: string) {
  const element = page.locator(selector);
  await element.fill(''); // limpa
  await element.type(text);
}

/**
 * Navega para uma URL e valida se a página carregou.
 */
export async function goToUrl(page: Page, url: string) {
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
}

/**
 * Espera um seletor aparecer antes de interagir.
 */
export async function waitForVisible(page: Page, selector: string, timeout = 5000) {
  await page.waitForSelector(selector, { state: 'visible', timeout });
}
