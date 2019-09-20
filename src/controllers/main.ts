import Logger from "../logger/logger.ts";
import ApiController from "./api-controller.ts";
import Responder from "../utils/responder.ts";

export interface IAppControllers {
  getApiController(): ApiController;
}

export default class AppControllers implements IAppControllers {
  private apiController: ApiController;

  constructor(
    private logger: Logger,
    private responder: Responder
  ) {
    this.apiController = new ApiController(this.logger, responder);
  }

  public getApiController(): ApiController {
    return this.apiController;
  }
}
