import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                // Diretório padrão dos testes
  timeout: 30 * 1000,                // Timeout global de 30 segundos por teste
  expect: {
    timeout: 5000,                   // Timeout padrão das asserções (expect)
  },
  fullyParallel: true,               // Roda testes em paralelo por arquivo
  forbidOnly: !!process.env.CI,      // Falha se houver `.only` no CI
  retries: process.env.CI ? 2 : 0,   // Faz 2 tentativas no CI
  reporter: [
    ['list'],                        // Mostra no console
    ['html', { outputFolder: 'reports/html' }],  // Report HTML local
    ['allure-playwright'],           // Se quiser usar Allure (instalar plugin)
  ],

  use: {
    baseURL: 'https://demo.playwright.dev',  // URL base opcional
    headless: true,                          // Define headless no CI
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',           // Captura screenshot em falha
    video: 'retain-on-failure',              // Guarda vídeo apenas se falhar
    trace: 'retain-on-failure',              // Captura trace para debug
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
