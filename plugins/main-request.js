let handler = async (m, { conn, text, command }) => {

  if (/^(re(quest)|req)$/.test(command)) {
    if (!text) return m.reply("what do you report?")

  var caption = `*REQUEST|PERMINTAAN*

*Dari:* @${m.sender.split(`@`)[0]}
*Pesan:* ${text}
`.trim()

conn.reply(nomorown + "@s.whatsapp.com", caption, m.quoted ? caption + m.quoted.text : caption, { mentions: conn.parseMention(caption) })

   } else if (/^(re(port)|bug)$/.test(command)) {
   if (!text) return m.reply("what do you report?")
   
  var caption2 = `*REPORT|LAPORAN*

*Dari:* @${m.sender.split(`@`)[0]}
*Pesan:* ${text}
`.trim()

conn.reply(nomorown + "@s.whatsapp.com", caption2, m.quoted ? caption2 + m.quoted.text : caption2, { mentions: conn.parseMention(caption2) })
  }
}
handler.help = ['request', 'report'].map(v => v + ' [teks]')
handler.tags = ['main']
handler.command = /^(re(quest|port)|req|bug)$/i

export default handler
