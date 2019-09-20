import defaults from "./defaults.json";

export type ServerConfig = {
  port: string;
  ip: string;
}

export type LogConfig = {
  level: string;
};

export type Config = {
  server: ServerConfig;
  log: LogConfig;
}

const config: Config = {
  server: {
    port: defaults.server.port,
    ip: defaults.server.ip
  },
  log: {
    level: defaults.log.level
  }
};

export default config;

