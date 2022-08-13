import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'all') {
let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat Infinity!*`, m, { contextInfo: { externalAdReply: { title: botdate, body: bottime, mediaType: 2, sourceUrl: sig, mediaUrl: sig, thumbnail: await(await fetch('https://telegra.ph/file/1836eec6c22d949829474.jpg')).buffer()}}})
        user.money = Infinity
        user.limit = Infinity
        user.level = Infinity
        } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    
    let jir = flaaa.getRandom()
    let hore = `${pickRandom(['Mancing mania mangtaf', 'Killing spriii', 'Owalahh dapet segini', 'Lain kali gwejh berusaha', 'Okwew..', 'Thanks', 'Dihh..', 'Xixixii..', 'Yaelah dapet segini', 'Hongreewww..', 'Baakaaaa', 'Ara..Ara..'])}`
    let emot = `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`
    
    let cht = global.db.data.users[who]
    cht.fullatm += 1000000
    
     // Mampuss
     let ran = Math.floor(Math.random() * 1000000)
     let niexp = cht.exp += ran
     let nilim = cht.limit += ran
     let nimon = cht.money += ran
     let niatm = cht.atm += ran
     
     // Button
    conn.sendHydrated(m.chat, `*${hore}* ${emot}
*${niexp}* EXP Total
*${nilim}* Limit Total
*${nimon}* Money Total
*${niatm}* ATM Total
    
    Ketik *.limit* untuk cek limit`, botdate, jir + 'Jir Ngechit', null, null, null, null, [
      ['Cheat', '/ngechit'],
      ['Cheat Infinity', '/ngechit all']
    ], null)
    }
}
handler.help = ['ngechit'].map(v => v + ' *hehe..*')
handler.tags = ['xp']
handler.command = /^(ngechit|cheat)$/i
handler.private = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }