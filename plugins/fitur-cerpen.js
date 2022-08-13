import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
        let name = await conn.getName(who)
try {
if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} cinta\nList:\ncinta\nhoror\njawa\nlucu\nperjuangan\nsahabat`)
  let json = await fetch(`https://api-xcoders.xyz/api/random/cerpen/${text}?apikey=xcoders`)
  let jsons = await json.json()
        let x = jsons.result
  let caption = `${htki} *${x.title}* ${htka}
*${htjava} Author:* ${x.author_name}
*${htjava} Url:* ${x.author_url}

${cmenuf}
${x.story}
`.trim()
                await conn.sendButton(m.chat, caption, wm, Buffer.alloc(0), [['➡️Next Cerpen➡️', `${usedPrefix}${command} ${text}`]], m, { quoted: fgif, mimetype: ddocx, fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await( await fetch(pp)).buffer(),
    sourceUrl: sgc }}})
  } catch {
let url = await fetch('https://masgi.herokuapp.com/api/cerpen')
  let cerpen = await url.json()
let hasil = `${htki} Cerpen *${text}* ${htka}
*${htjava} Powered By:* ${wm}

${cmenuf}
${cerpen.data}
`.trim()
conn.sendButton(m.chat, hasil, wm, Buffer.alloc(0), [['➡️Next Cerpen➡️', `${usedPrefix}${command} ${text}`]], m, { quoted: fgif, mimetype: ddocx, fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await( await fetch(pp)).buffer(),
    sourceUrl: sgc }}})
}
}
handler.help = ['cerpen'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cerpen|cerita)$/i

export default handler