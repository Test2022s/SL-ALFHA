//ALFHA SL | 2022

const _0x3356aa=_0x47df;function _0x84b0(){const _0x14b446=['downloadAndSaveMediaMessage','../config','jid','20xGDvHt','8lCmIjr','short\x20cut','240842NCORKa','save','56QFIgTY','1515oLEbam','SUCCSESFUL\x20UPLOADED\x20LINK\x20IS->\x0a\x0a','reply_message','61083UyGocb','sendMessage','public','7558577eVMoWv','readFileSync','WORKTYPE','36WilvFh','end','1340YvsgQT','text','quotedMessage','image/jpg','chalk','16785HiyEcd','client','RAVANA.jpg','180936XhbdDg','213870YYbrfn','tpu\x20?(.*)','addCommand','data','../events','@adiwajshing/baileys','fluent-ffmpeg','cobrabot-patch','12zLRBJk','Please\x20Reply\x20a\x20photo\x20(\x20ෆොටෝ\x20එකකට\x20රිප්ලයි\x20කරන්න\x20)'];_0x84b0=function(){return _0x14b446;};return _0x84b0();}(function(_0x4e60cc,_0x3fd8b1){const _0xe19b90=_0x47df,_0x128f28=_0x4e60cc();while(!![]){try{const _0x309b95=parseInt(_0xe19b90(0x185))/0x1*(parseInt(_0xe19b90(0x167))/0x2)+parseInt(_0xe19b90(0x172))/0x3*(parseInt(_0xe19b90(0x180))/0x4)+-parseInt(_0xe19b90(0x17f))/0x5*(-parseInt(_0xe19b90(0x171))/0x6)+-parseInt(_0xe19b90(0x182))/0x7*(parseInt(_0xe19b90(0x184))/0x8)+parseInt(_0xe19b90(0x16e))/0x9*(-parseInt(_0xe19b90(0x169))/0xa)+-parseInt(_0xe19b90(0x188))/0xb+parseInt(_0xe19b90(0x17a))/0xc*(parseInt(_0xe19b90(0x164))/0xd);if(_0x309b95===_0x3fd8b1)break;else _0x128f28['push'](_0x128f28['shift']());}catch(_0x20db8f){_0x128f28['push'](_0x128f28['shift']());}}}(_0x84b0,0x5bb2e));function _0x47df(_0x33aa0f,_0x1b7e73){const _0x84b023=_0x84b0();return _0x47df=function(_0x47df8f,_0x13a380){_0x47df8f=_0x47df8f-0x164;let _0x65671c=_0x84b023[_0x47df8f];return _0x65671c;},_0x47df(_0x33aa0f,_0x1b7e73);}const RAVANA=require(_0x3356aa(0x176)),{MessageType,MessageOptions,Mimetype}=require(_0x3356aa(0x177)),Config=require(_0x3356aa(0x17d)),chalk=require(_0x3356aa(0x16d)),axios=require('axios'),fs=require('fs'),{uploadByBuffer}=require(_0x3356aa(0x179)),ffmpeg=require(_0x3356aa(0x178)),need=_0x3356aa(0x17b),{execFile}=require('child_process');RAVANA[_0x3356aa(0x174)]({'pattern':_0x3356aa(0x173),'fromMe':!![],'deleteCommand':!![],'desc':_0x3356aa(0x181)},async(_0x49d45e,_0x53466d)=>{const _0x33e21a=_0x3356aa;if(!_0x49d45e[_0x33e21a(0x187)])return await _0x49d45e[_0x33e21a(0x16f)]['sendMessage'](_0x49d45e[_0x33e21a(0x17e)],need,MessageType[_0x33e21a(0x16a)]);var _0x2f67d0=await _0x49d45e[_0x33e21a(0x16f)]['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x49d45e[_0x33e21a(0x187)][_0x33e21a(0x17e)],'id':_0x49d45e['reply_message']['id']},'message':_0x49d45e[_0x33e21a(0x187)][_0x33e21a(0x175)][_0x33e21a(0x16b)]});ffmpeg(_0x2f67d0)[_0x33e21a(0x183)](_0x33e21a(0x170))['on'](_0x33e21a(0x168),async()=>{const _0x304142=_0x33e21a;var _0x353260=await uploadByBuffer(fs[_0x304142(0x165)](_0x304142(0x170)),_0x304142(0x16c));await _0x49d45e['client'][_0x304142(0x189)](_0x49d45e[_0x304142(0x17e)],_0x304142(0x186)+_0x353260['link'],MessageType[_0x304142(0x16a)]);});});Config[_0x3356aa(0x166)]==_0x3356aa(0x18a)&&RAVANA['addCommand']({'pattern':'tpu\x20?(.*)','fromMe':![],'deleteCommand':!![],'desc':_0x3356aa(0x181)},async(_0x4bb825,_0x1be841)=>{const _0x5a4eaa=_0x3356aa;if(!_0x4bb825[_0x5a4eaa(0x187)])return await _0x4bb825[_0x5a4eaa(0x16f)][_0x5a4eaa(0x189)](_0x4bb825[_0x5a4eaa(0x17e)],need,MessageType['text']);var _0x5f2259=await _0x4bb825[_0x5a4eaa(0x16f)][_0x5a4eaa(0x17c)]({'key':{'remoteJid':_0x4bb825[_0x5a4eaa(0x187)]['jid'],'id':_0x4bb825[_0x5a4eaa(0x187)]['id']},'message':_0x4bb825[_0x5a4eaa(0x187)][_0x5a4eaa(0x175)][_0x5a4eaa(0x16b)]});ffmpeg(_0x5f2259)[_0x5a4eaa(0x183)]('RAVANA.jpg')['on']('end',async()=>{const _0x59d7db=_0x5a4eaa;var _0x2cb1cd=await uploadByBuffer(fs[_0x59d7db(0x165)](_0x59d7db(0x170)),_0x59d7db(0x16c));await _0x4bb825[_0x59d7db(0x16f)][_0x59d7db(0x189)](_0x4bb825['jid'],_0x59d7db(0x186)+_0x2cb1cd['link'],MessageType[_0x59d7db(0x16a)]);});});
