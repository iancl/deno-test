import { LogConfig } from "../config/config.ts";

const enum Levels {
  Debug = 'debug',
  Error = 'error',
  Info = 'info'
}

export interface ILogger {
  error(msg: string): void;
  info(msg: string): void;
  debug(msg: string): void;
}

export default class Logger implements ILogger {
  private level: string;

  constructor(config: LogConfig) {
    this.level = config.level;
  }

  public debug(msg: string) {
    if (this.level === Levels.Debug) {
      console.log(`DEBUG: ${msg}`);
    }
  }

  public error(msg: string): void {
    console.error(`Error: ${msg}`);
  }

  public info(msg: string) {
    if (this.level === Levels.Info || this.level === Levels.Debug) {
      console.log(`INFO: ${msg}`);
    }
  }
}
