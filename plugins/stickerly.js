import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

    if (!text) throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} spongebob`
    let res = await fetch(API('lolhuman', '/api/stickerwa', { query: text }, 'apikey'))
    let json = await res.json()
    let ha = json.result[0].stickers
    
        let stiker = await sticker(false, ha.getRandom(), packname, author)
        // await conn.sendFile(m.chat, stiker, '', '', m, 0, { asSticker: true })
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: fsizedoc, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['stickerly <teks>']
handler.tags = ['sticker']
handler.command = /^(stickerly)$/i

handler.limit = 3

export default handler
