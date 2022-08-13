import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner Hinata;Bot;;Md\nFN:Saya Owner Hinata Bot WhatsApp, Md\nNICKNAME:👑 Owner Hinata Bot\nORG:Claraa\nTITLE:Here\nitem1.TEL;waid=62895604670507:+62 895-6046-70507\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://linktr.ee/raaaaa_\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:clarz939@mail.com\nitem3.X-ABLabel:💌 Mail Owner HinataBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 13 January 3030\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fliveLoc })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
