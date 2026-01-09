import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "KISILOV AI на связи.\nЯ здесь, чтобы убрать хаос и сказать, что делать дальше."
  );
});
