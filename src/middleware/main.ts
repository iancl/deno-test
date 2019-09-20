import { Application } from "https://deno.land/x/oak/mod.ts";
import Logger from "../logger/logger.ts";
import RequestLogger from "./request-logger.ts";

export interface IMiddleware {
  mount(app: Application): Promise<void>;
}

export default class Middleware implements IMiddleware {
  private requestLogger: RequestLogger;
  constructor(
    private logger: Logger
  ) {
    this.requestLogger = new RequestLogger(this.logger);
  }

  public mount(app: Application): Promise<void> {
    return this.requestLogger.mount(app);
  }
}
