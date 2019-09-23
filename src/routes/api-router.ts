import {
  Application,
  RouterContext,
  Router } from "https://deno.land/x/oak/mod.ts";
import Logger from "../logger/logger.ts";
import ApiController from "../controllers/api-controller.ts";
import Responder from "../utils/responder.ts";

export interface IRouter {
  mount(app: Application):void;
}

export default class ApiRouter implements IRouter {
  private router:Router = new Router();

  constructor(
    private controller: ApiController,
    private logger: Logger,
    private responder: Responder
  ) {
    this.mountRoutes();
  }

  private mountRoutes() {
    this.router.get('/api/healthcheck', (ctx: RouterContext) => {
      this.responder.success(ctx, {message: 'ok'})
    });

    this.router.post('/api/sum/:num1/:num2', this.controller.sum);
  }

  public mount(app: Application): void {
    app.use(this.router.routes());
    app.use(this.router.allowedMethods());
  }
}
