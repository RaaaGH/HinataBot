import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
π *${v.title}* (${v.url})
β Duration: ${v.durationH}
β²οΈ Uploaded ${v.publishedTime}
ποΈ ${v.view} views
      `.trim()
      case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} (${v.subscriber}) Subscriber_
π₯ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\nβ£ββββ© *YT SEARCH* βͺββββ£\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, `${imgr + command}`, [
                ['Youtube Searchπ', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
