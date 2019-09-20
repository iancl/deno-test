import { RouterContext, Status } from "https://deno.land/x/oak/mod.ts"
import { HeaderNames, MimeTypes, JsonResponse } from "../types/types.ts";

export interface IResponder {
  badRequest(ctx: RouterContext): void;
  notFound(ctx: RouterContext): void;
  success(ctx: RouterContext, data: JsonResponse): void;
}

export default class Responder implements IResponder {
  public badRequest(ctx: RouterContext): void {
    const body: JsonResponse = { message: 'bad request' };

    ctx.response.status = Status.BadRequest;
    ctx.response.headers[HeaderNames.ContentType] = MimeTypes.Json;
    ctx.response.body = body;
  }

  public success(ctx: RouterContext, data: JsonResponse): void {
    ctx.response.status = Status.OK;
    ctx.response.headers[HeaderNames.ContentType] = MimeTypes.Json;
    ctx.response.body = data;
  }

  public notFound(ctx: RouterContext): void{
    const body: JsonResponse = { message: 'not found' };

    ctx.response.status = Status.NotFound;
    ctx.response.headers[HeaderNames.ContentType] = MimeTypes.Json;
    ctx.response.body = body;
  }
}
