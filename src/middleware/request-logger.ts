import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import Logger from "../logger/logger.ts";

export interface IRequestLogger {
  mount(app: Application): Promise<void>;
}

export default class RequestLogger implements IRequestLogger {

  constructor(
    private logger: Logger
  ) {}

  public async mount(app: Application): Promise<void> {
    await app.use(async (ctx: Context, next: () => Promise<void>) => {
      const start:number = Date.now();

      await next();

      const ms = Date.now() - start;
      this.logger.info(
        `[${ctx.request.method}] [${ctx.request.url}] ` +
        `[${ms} ms] [${ctx.response.status}]`);
    });
  }
}
