require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const config = ({
  ...process.env,
  PORT: process.env.PORT || 8080,
  PUBLIC_URL: isProduction
    ? 'https://cms.bemuns.org'
    : `http://127.0.0.1:${process.env.PORT || 8080}`,

  STORAGE_LOCATIONS: isProduction ? 'gcp,local' : 'local,gcp',
  STORAGE_GCP_DRIVER: 'gcs',
  STORAGE_GCP_ROOT: '',
  STORAGE_GCP_BUCKET: 'bemuns.org',
  STORAGE_LOCAL_DRIVER: 'local',
  STORAGE_LOCAL_ROOT: './uploads',

  KEY: process.env.KEY,
  SECRET: process.env.SECRET,

  EMAIL_FROM: 'no-reply@bemuns.org',
  EMAIL_TRANSPORT: 'smtp',
  EMAIL_SMTP_HOST: 'smtp.gmail.com',
  EMAIL_SMTP_PORT: 465,
  EMAIL_SMTP_USER: 'bemuns113@gmail.com',
  EMAIL_SMTP_PASSWORD: process.env.EMAIL_SMTP_PASSWORD,
  EMAIL_SMTP_SECURE: true,
  EMAIL_SMTP_IGNORE_TLS: true,
  EMAIL_SMTP_POOL: true,

  CORS_ENABLED: true,
  CORS_ORIGIN: true,

  ...(isProduction ? {
    LOG_STYLE: 'raw',
    LOGGER_LEVELS: 'trace:DEBUG,debug:DEBUG,info:INFO,warn:WARNING,error:ERROR,fatal:CRITICAL',
    LOGGER_MESSAGE_KEY: 'message',
  } : {})
});

module.exports = config;
