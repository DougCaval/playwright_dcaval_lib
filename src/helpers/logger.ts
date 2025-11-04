/* eslint-disable no-console */
export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

/**
 * Loga uma mensagem formatada com timestamp e nível.
 */
export function log(level: LogLevel, message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

/**
 * Atalhos para logs rápidos.
 */
export const logger = {
  info: (msg: string) => log(LogLevel.INFO, msg),
  warn: (msg: string) => log(LogLevel.WARN, msg),
  error: (msg: string) => log(LogLevel.ERROR, msg),
};
