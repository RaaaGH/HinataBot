import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://sharechat.com/video/pDExqga`
        let res = await fetch(`https://api.lolhuman.xyz/api/sharechat?apikey=${global.lolkey}&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} ShareChat ${htka}*
*title:* ${x.result.title}
    `, x.result.title + '.mp4', await(await fetch(x.result.link_dl)).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(x.result.thumbnail)).buffer(),
    sourceUrl: x.result.link_dl
     }}
  })
}
handler.help = ['sharechat'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((sharechat)(downloder|dl)?)$/i

export default handler
