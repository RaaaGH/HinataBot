import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
    let nm = 100
    let a = nm.getRandom()
    let b = nm.getRandom()
    let e = nm.getRandom()
    let f = nm.getRandom()
    let g = nm.getRandom()
    let h = nm.getRandom()
    let c = ['Baik Hati','Sombong','Pelit','Dermawan','Rendah Hati','Rendah Diri','Pemalu','Penakut','Pengusil','Cengeng'].getRandom()
    let d = ['Rajin','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Chattan sama Doi','Chattan di WA karna Jomblo','Sedih','Kesepian','Bahagia'].getRandom()

let caption = `${cmenut} *SIFAT ${text}* 🔖
│
${cmenub} Nama : *${text}*
${cmenub} Ahlak Baik : *${a}%*
${cmenub} Ahlak Buruk : *${b}%*
${cmenub} Orang yang : *${c}*
${cmenub} Selalu : *${d}*
${cmenub} Kecerdasan : *${e}%*
${cmenub} Kenakalan : *${f}%*
${cmenub} Keberanian : *${g}%*
${cmenub} Ketakutan : *${h}%*
${cmenuf}
`
conn.sendButton(m.chat, caption, author, await(await fetch(hwaifu.getRandom())).buffer(), [['🎀 Menu', '/menu']], m, { mentions: conn.parseMention(caption), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
}
handler.help = ['ceksifat'].map(v => v + ' <nama>')
handler.tags = ['kerang', 'fun']
handler.command = /^ceksifat/i

export default handler
