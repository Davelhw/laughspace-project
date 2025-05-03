// libs/config/src/env.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('env', () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  app: {
    port: parseInt(process.env.APP_PORT || '3000', 10),
    host: process.env.APP_HOST || 'localhost',
    url: process.env.APP_URL || 'http://localhost:3000',
    name: process.env.APP_NAME || 'Laugh Space',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '27017', 10),
    name: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    expiry: process.env.JWT_EXPIRY || '15m',
  },
}));
