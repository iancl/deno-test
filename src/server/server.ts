import { Application } from "https://deno.land/x/oak/mod.ts";
import { Config } from "../config/config.ts";
import Logger from "../logger/logger.ts";
import Middleware from "../middleware/main.ts";
import AppRouter from "../routes/main.ts";

export interface IServer {
  start(): Promise<void>;
}


export default class Server implements IServer {
  private app: Application = new Application();

  constructor(
    private config: Config,
    private logger: Logger,
    private middleware: Middleware,
    private router: AppRouter
  ) {
    this.mountMiddlware();
    this.mountRouters();
  }

  private mountRouters(): void {
    this.router.mount(this.app);
    this.logger.debug('mounted router');
  }

  private async mountMiddlware() {
    await this.middleware.mount(this.app);
    this.logger.debug('mounted middleware');
  }

  public async start(): Promise<void> {
    await this.app.listen(
      `${this.config.server.ip}:${this.config.server.port}`);
    this.logger.debug(`started server on port ${this.config.server.port}`);
  }
}
