// index.ts na sua lib
export * from '@playwright/test';
export { chromium, firefox, webkit } from 'playwright';

// Custom helpers
export const dcavalHelper = () => console.log('Lib customizada por Doug Caval!');
