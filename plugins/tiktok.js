//ALFHA SL | 2022

const ALFHA= require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const need = "NEED TIK TOK LINK"
const down = "DOWNLOADING YOUR TIK TOK VIDEO"
const np = "CAN'T FIND"
const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')


ALFHA.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, need, MessageType.text)

        await message.client.sendMessage(message.jid, down, MessageType.text)

        await axios
          .get(`https://api.dapuhy.ga/api/socialmedia/tiktoknowm?url=${userName}&apikey=oVJfX5of9OfSXH5`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'musicly id tiktok downloader\n ALFHA| ©2022🇱🇰',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, np, MessageType.text),
          )
      },
    )
