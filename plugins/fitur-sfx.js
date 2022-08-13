import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  
/*MyInstans*/
if (command == 'sfx') {
if (!args[0] || !args[1]) throw `Contoh penggunaan ${usedPrefix}${command} 2 9
*ket:*
2 : page site
9 : urutan sound

_Batas page ± 500_
_Batas urutan 10_
`
try {
    let gas = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${args[0]}`)
    let json = await gas.json()
    let hasil = json.results
    let ke = args[1]
    let sound = hasil[ke].sound
    await conn.sendFile(m.chat, sound, ke + '.mp3', '', m, null, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sound
     }}
  })
} catch (e) {
return m.reply('Error kan')
}
}

if (command == 'sfx2') {
if (!text) throw `Contoh:
${usedPrefix + command} 10`
let f = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${text}`)
let xx = await f.json()
let v = xx.results
let teks = v.map(v => {
return `
*Name :* ${v.name}
*Sound :* ${v.sound}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
}

/*FreeSound*/
if (command == 'sfx3') {
if (!one || !two) throw `Contoh penggunaan ${usedPrefix}${command} drum|2
*ket:*
drum : nama sound
2 : urutan sound

_Ada Batas urutan_
`
    let gas = await fetch(`https://freesound.org/apiv2/search/text/?format=json&query=${one}&token=TJEbxX84wKTySiEtUPxhm8b2WCi5Izak0h9nNDbO`)
    let json = await gas.json()
    let hasil = json.results
    let id = hasil[two].id
    let name = hasil[two].name
    let license = hasil[two].license
    let username = hasil[two].username
let teks = `*Name :* ${name}
*ID :* ${id}
*license :* ${license}
*username :* ${username}`
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Detail', `${usedPrefix}sfx4 ${id}`]
            ], m)
}

if (command == 'sfx4') {
if (!text) throw `Contoh:
${usedPrefix + command} 1234`
let f = await fetch(`https://freesound.org/apiv2/sounds/${text}/?format=json&token=TJEbxX84wKTySiEtUPxhm8b2WCi5Izak0h9nNDbO`)
let xx = await f.json()

let teks = `*Name :* ${xx.name}
*ID :* ${xx.id}
*filesize :* ${xx.filesize} byte
*username :* ${xx.username}`
  await conn.sendButton(m.chat, teks, wm, xx.images['spectral_bw_l'], [
                ['Audio', usedPrefix + 'get ' + xx.previews['preview-hq-mp3']]
            ], m)
}

/*MAP*/
if (command == 'smap') {
let rndm = ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RS','RE','RO','RU','RW','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','XT','TM','TC','TV','UG','UA','AE','GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW']

if (!text) throw `Contoh:
${usedPrefix + command} ID`
let f = await fetch(`https://api.worldbank.org/v2/country/${text}?format=json`)
let xx = await f.json()

let teks = `*Name :* ${xx[1][0].name}
*ID :* ${xx[1][0].id}
*City :* ${xx[1][0].capitalCity}
*longitude :* ${xx[1][0].longitude}
*latitude :* ${xx[1][0].latitude}`
  await conn.sendButton(m.chat, teks, wm, `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${xx[1][0].longitude},${xx[1][0].latitude}&z=12&l=map&size=600,300`, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
}



}
handler.command = handler.help = ['sfx', 'sfx2', 'sfx3', 'sfx4', 'smap']
handler.tags = ['audio']

export default handler
