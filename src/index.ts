// src/index.ts
import { expect as baseExpect } from '@playwright/test';

// ✅ Reexporta o expect do Playwright
export const expect = baseExpect;

// ✅ Reexporta os tipos nativos para manter compatibilidade
export type {
  Page,
  Browser,
  BrowserContext,
  Locator,
  APIResponse,
  Request,
  Response,
} from 'playwright';

// ✅ Reexporta suas funções utilitárias, se quiser
export * from './helpers/actions';
export * from './helpers/assertions';
export * from './helpers/logger';
