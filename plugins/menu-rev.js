import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• 3d-gradient
• 3dstone
• 1917
• aesthetic
• ahegao
• akira
• akiyama
• anaa
• anime
• anjing
• art-papper
• ass
• astone
• asuna
• ayuzawa
• bdsm
• black-pink
• blood
• blowjob
• boneka-chucky
• boruto
• bread
• broken-glass
• cecan
• cecan2
• chiho
• chitoge
• christmas
• cogan
• cogan2
• cuckold
• cum
• cyberspace
• deidara
• deluxe-silver
• doraemon
• drop-water
• eba
• elaina
• emilia
• engraved
• ero
• erza
• fabric
• femdom
• foot
• gaming
• gangbang
• gifs
• glasses
• glossy
• glue-text
• grafity-text
• gremory
• hallowen
• hallowen-text
• harry-potter
• hekel
• hentai
• hestia
• hinata
• holograpic
• honey
• horor-blood
• ice
• inori
• islami
• isuzu
• itachi
• itori
• jahy
• jeni
• jiso
• joker-logo
• joox
• justina
• kaga
• kagura
• kaori
• kartun
• katakata
• keneki
• koi
• kotori
• kpop
• kucing
• kurumi
• larva
• loli
• luxury
• madara
• magma
• manga
• masturbation
• mediafire
• megumin
• mikasa
• miku
• minato
• mobil
• montor
• mountain
• multi-color
• naruto
• natural-leavest
• neko
• neko2
• neon-devil
• neon-light
• nezuko
• nsfwloli
• onepiece
• orgy
• panties
• pentol
• pokemon
• pornhub
• ppcouple
• programing
• pubg
• pussy
• rize
• rose
• rusty
• ryujin
• sagiri
• sakura
• sasuke
• satanic
• shina
• shinka
• shinomiya
• shizuka
• shota
• sky-text
• stroberi
• tatasurya
• tejina
• teknologi
• tentacles
• thighs
• thunder2
• toukachan
• toxic-bokeh
• trans
• tsunade
• waifu
• waifu2
• wallhp
• water-color
• wicker
• writing
• xnxx
• xvideo
• yotsuba
• yuki
• yumeko
• yuri
• zettai
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
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
            
if (command) {
switch (template) {

        
            case 'mediafire':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let pn = await fetch(`https://revita.herokuapp.com/api/download/mediafire?url=${one}&apikey=ApiRevita`)
        let pnn = await pn.json()
        let pnnnn = `*Result:*\n${pnn.result[0].name}\n${pnn.result[0].mime}\n${pnn.result[0].size}`
        await conn.sendButton(m.chat, pnnnn, wm, null, [
                ['Get', `${usedPrefix}get ${pnn.result[0].link}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case 'pornhub':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let sp = await fetch(`https://revita.herokuapp.com/api/downloader/pornhub?query=${one}&apikey=ApiRevita`)
        let spp = await sp.json()
        let str = spp.result.results.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case 'xnxx':
            case 'xvideo':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let sp1 = await fetch(`https://revita.herokuapp.com/api/downloader/${args[0]}?query=${one}&apikey=ApiRevita`)
        let spp1 = await sp1.json()
        let str1 = spp1.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
info: ${v.info}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str1, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case 'joox':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let go = await fetch(`https://revita.herokuapp.com/api/music/joox?query=${one}&apikey=ApiRevita`)
        let goo = await go.json()
        let gooo = `*Result:* ${goo.result.lagu}
        ${goo.result.album}
        ${goo.result.penyanyi}
        ${goo.result.publish}`
        await conn.sendButton(m.chat, gooo, wm, goo.result.img, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'gifs':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'masturbation':
case 'neko2':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai':
            if (args[0]) throw `Contoh penggunaan ${usedPrefix + command} query`
        let hm = `https://revita.herokuapp.com/api/nsfw/${args[0]}?apikey=ApiRevita`
        let hmmm = `*Result:* ${args[0]}`
        await conn.sendButton(m.chat, hmmm, wm, hm, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case '3d-gradient':
case '3dstone':
case '1917':
case 'art-papper':
case 'astone':
case 'black-pink':
case 'blood':
case 'bread':
case 'broken-glass':
case 'christmas':
case 'deluxe-silver':
case 'drop-water':
case 'engraved':
case 'fabric':
case 'glossy':
case 'glue-text':
case 'grafity-text':
case 'hallowen-text':
case 'hallowen':
case 'harry-potter':
case 'holograpic':
case 'honey':
case 'horor-blood':
case 'ice':
case 'joker-logo':
case 'koi':
case 'larva':
case 'luxury':
case 'magma':
case 'multi-color':
case 'natural-leavest':
case 'neon-devil':
case 'neon-light':
case 'rusty':
case 'sky-text':
case 'stroberi':
case 'thunder2':
case 'toxic-bokeh':
case 'water-color':
case 'wicker':
case 'writing':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let wk = await fetch(`https://revita.herokuapp.com/api/textpro/${args[0]}?text=${one}&apikey=ApiRevita`)
        let wkk = await wk.json()
        let wkkk = `*Result:* ${wkk.result}`
        await conn.sendButton(m.chat, wkkk, wm, wkk.result, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            case 'aesthetic':
case 'akira':
case 'akiyama':
case 'ana':
case 'anime':
case 'anjing':
case 'asuna':
case 'ayuzawa':
case 'boneka-chucky':
case 'boruto':
case 'cecan2':
case 'cecan':
case 'chiho':
case 'chitoge':
case 'cogan2':
case 'cogan':
case 'cyberspace':
case 'deidara':
case 'doraemon':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gaming':
case 'gremory':
case 'hekel':
case 'hestia':
case 'hinata':
case 'inori':
case 'islami':
case 'isuzu':
case 'itachi':
case 'itori':
case 'jeni':
case 'jiso':
case 'justina':
case 'kaga':
case 'kagura':
case 'kaori':
case 'kartun':
case 'katakata':
case 'keneki':
case 'kotori':
case 'kpop':
case 'kucing':
case 'kurumi':
case 'loli':
case 'madara':
case 'megumin':
case 'mikasa':
case 'miku':
case 'minato':
case 'mobil':
case 'montor':
case 'mountain':
case 'naruto':
case 'nezuko':
case 'nsfwloli':
case 'onepiece':
case 'pentol':
case 'pokemon':
case 'ppcouple':
case 'programing':
case 'pubg':
case 'rize':
case 'rose':
case 'ryujin':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'satanic':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'shota':
case 'tatasurya':
case 'tejina':
case 'teknologi':
case 'toukachan':
case 'trans':
case 'tsunade':
case 'waifu2':
case 'waifu':
case 'wallhp':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'yuri':
            if (!args[0]) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} `
        let rimg = `https://revita.herokuapp.com/api/wallpaper/${args[0]}?apikey=ApiRevita`
        let riimg = `*Result:* ${args[0]}`
        await conn.sendButton(m.chat, riimg, wm, rimg, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            break
            
}
}
}
handler.help = ['rev <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^rev$/i
export default handler