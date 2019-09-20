import { RouterContext, Status } from "https://deno.land/x/oak/mod.ts";
import Logger from "../logger/logger.ts";
import { MimeTypes } from "../types/types.ts";
import Responder from "../utils/responder.ts";

export interface IApiController {
  sum(ctx: RouterContext): void;
}

export default class ApiController implements IApiController {
  constructor(
    private logger: Logger,
    private responder: Responder
  ) {}

  public sum = (ctx: RouterContext): void => {
    if (!ctx.params.num1 || !ctx.params.num2) {
      return this.responder.badRequest(ctx);
    }

    const n1: number = Number(ctx.params.num1);
    const n2: number = Number(ctx.params.num2);
    const sum: number = n1 + n2;

    return this.responder.success(ctx, {result: sum})
  }
}
