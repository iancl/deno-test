import { Application, RouterContext } from "https://deno.land/x/oak/mod.ts";
import ApiRouter from "./api-router.ts";
import Logger from "../logger/logger.ts";
import AppControllers from "../controllers/main.ts";
import Responder from "../utils/responder.ts";

export interface IAppRouter {
  mount(app: Application): void;
}

export default class AppRouter implements IAppRouter {
  private apiRouter: ApiRouter;

  constructor(
    private controllers: AppControllers,
    private logger: Logger,
    private responder: Responder
  ) {
    this.apiRouter = new ApiRouter(
      this.controllers.getApiController(),
      this.logger,
      this.responder);
  }

  public mount(app: Application): void {
    this.apiRouter.mount(app);

    // 404 route
    app.use((ctx: RouterContext) => {
      this.responder.notFound(ctx);
    });
  }
}
