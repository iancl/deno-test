import config, { Config, LogConfig } from "./config/config.ts";
import Server from "./server/server.ts";
import Logger from "./logger/logger.ts";
import Middleware from "./middleware/main.ts";
import AppRouter from './routes/main.ts';
import AppControllers from "./controllers/main.ts";
import Responder from "./utils/responder.ts";

async function main() {
  const logger: Logger = new Logger(config.log);

  try {
    const responder: Responder = new Responder();
    const appControllers: AppControllers = new AppControllers(
      logger,
      responder);
    const middleware = new Middleware(logger);
    const router = new AppRouter(appControllers, logger, responder);
    const server:Server = new Server(config, logger, middleware, router);
    await server.start();
  }
  catch(err) {
    logger.error(err.stack);
  }
}

main();
