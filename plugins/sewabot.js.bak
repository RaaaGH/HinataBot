import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, args, text}) => {
if (command == 'sewabot') {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let pepe = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  let baper = await fetch(pepe).then(a => a.buffer())
  let aine = nomorown + '@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
 await conn.relayMessage(m.chat, {listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `👋 Hai ${name}

*• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title: 'Klik untuk order',
  products:[{productId: '7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: '0@s.whatsapp.net'
  },
  footerText: 'https://s.id/Cerdasin62',
  }},{quoted: ftroli})
  
  // Kontak
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282195322106:+62 821-9532-2106\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih owner ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, {quoted: m})
}

if (command == 'mengproduk') {
if (!text) throw `Teksnya?`
  await conn.relayMessage(m.chat, 
{"productMessage": {
"product": {
		"productImage": {
		 "url": "https://mmg.whatsapp.net/d/f/AnSw-hoxnHkZZE5HfU3Hx8ErJYTt_onVglwSnFJE8x2c.enc",
"mimetype": "image/jpeg",
"fileSha256": "nDM/acIuR4SDh/ZKrS8ysfYlM2Z/RgAuikg9Bj1jK+s=",
"fileLength": "12295",
"height": 371,
"width": 558,
"mediaKey": "p95ebDGt25rIs76r5ymJxeuvKnhUEKQnTilft7z/JEo=",
"fileEncSha256": "NnBWPq0KgBt2VCN4zD4xg2N/gr/VgZdy8dNnEWqacRc=",
"jpegThumbnail": fs.readFileSync("./thumbnail.jpg")
},
"productId": "9999999",
	"title": wm, 
	"description": text,
	"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {
	"forwardingScore": 9999,
	"isForwarded": false
}
}},{quoted: ftroli})
  
}

if (command == 'mengorder') {
if (!text) throw `Teksnya?`
await conn.relayMessage(m.chat, 
{"orderMessage": { "itemCount": 2021,
"message": text,
"footerText": wm, 
"thumbnail": Buffer.alloc(0),
"surface": 'CATALOG' }},{quoted: ftroli})
  
}

if (command == 'menggrup') {
if (!text) throw `Teksnya?`
await conn.relayMessage(m.chat, 
{"groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us',
"inviteCode": text,
"groupName": author,
"footerText": wm,
"jpegThumbnail": Buffer.alloc(0),
"caption": 'Group: ' + text
}},{quoted: ftroli})
  
}

if (command == 'mengfake') {
let tema = args[0]
let filesize = args[1]
if (tema == 'aud') {
  await conn.relayMessage(m.chat, 
{"audioMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"fileSha256": m.quoted.fileSha256.toString('base64'),
						"fileLength": filesize,
						"seconds": filesize,
						"ptt": true,
						"mediaKey": m.quoted.mediaKey.toString('base64'),
						"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"jpegThumbnail": m.quoted.jpegThumbnail
}},{quoted: ftroli})
  
  }
  if (tema == 'vid') {
 await conn.relayMessage(m.chat, 
{"videoMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"fileSha256": m.quoted.fileSha256,
						"fileLength": filesize,
						"seconds": filesize,
						"mediaKey": m.quoted.mediaKey,
						"caption": m.quoted.caption,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"fileEncSha256": m.quoted.fileEncSha256,
						"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"jpegThumbnail": m.quoted.jpegThumbnail,
						"streamingSidecar": m.quoted.streamingSidecar
}},{quoted: ftroli})
    }
  if (tema == 'stick') {
 await conn.relayMessage(m.chat, 
{"stickerMessage": {
						"url": m.quoted.url,
						"fileSha256": m.quoted.fileSha256,
						"fileEncSha256": m.quoted.fileEncSha256,
						"mediaKey": m.quoted.mediaKey,
						"mimetype": m.quoted.mimetype,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"directPath": m.quoted.directPath,
						"fileLength": filesize,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"isAnimated": m.quoted.isAnimated
}},{quoted: ftroli})
  
  }
  if (tema == 'img') {
  await conn.relayMessage(m.chat, 
{"imageMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"caption": m.quoted.caption,
						"fileSha256": m.quoted.fileSha256,
						"fileLength": filesize,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"mediaKey": m.quoted.mediaKey,
						"fileEncSha256": m.quoted.fileEncSha256,
						"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"jpegThumbnail": m.quoted.jpegThumbnail
}},{quoted: ftroli})
  
  }
  }
  }
handler.command = ['sewabot', 'mengproduk', 'mengorder', 'mengfake', 'menggrup']

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
