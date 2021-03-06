const { join } = require('path');

require('dotenv-safe').config({
  example: join(__dirname, '..', '..', '.env.example'),
  path: join(__dirname, '..', '..', '.env'),
});

const config = {
  BOT_TOKEN,
  BOT_NAME,
} = process.env;

module.exports = config;
