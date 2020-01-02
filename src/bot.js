const Telegraf = require('telegraf');
const {
  BOT_TOKEN,
  BOT_NAME,
} = require('./config/vars');
const kinki = require('./domain/kinki');

const bot = new Telegraf(BOT_TOKEN);

const helpText = `Soy un bot en línea, puedes usarme en cualquier chat escribiendo @${BOT_NAME}`;
bot.start(ctx => ctx.reply(helpText));
bot.help(ctx => ctx.reply(helpText));


const catchErrors = fn => (...params) => fn(...params).catch(err => console.error('ERROR: ', err));

const inlineQueryHandler = ({ inlineQuery, answerInlineQuery }) => {
  const query = inlineQuery.query;
  const message = kinki(query);

  const messageObject = {
    type: 'article',
    id: message,
    title: 'kinki',
    description: message,
    input_message_content: {
      message_text: message
    }
  };

  return answerInlineQuery([messageObject]);
};

bot.on('inline_query', catchErrors(inlineQueryHandler));

module.exports = bot;
