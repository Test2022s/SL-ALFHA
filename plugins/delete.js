//ALFHA

const ALFHA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes The Replied Message"

ALFHA.addCommand({pattern: 'del', fromMe: true, desc: DEL_DESC}, (async (message, match) => {

  await message.reply_message.delete();

}));
