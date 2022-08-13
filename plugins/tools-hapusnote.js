let handler = async(m, {conn, command, usedPrefix, text}) => {
  global.db.data.users[m.sender].note = global.db.data.users[m.sender].note || []
  let i = 0
  if (global.db.data.users[m.sender].note.length == 0) return m.reply('Kamu belum punya note!')
  let txt = '🗒️Daftar note🗒️\n\n'
  for (let ct in global.db.data.users[m.sender].note) {
    i += 1
    txt += '[' + i + ']. ' + global.db.data.users[m.sender].note[ct].title + '\n'
  }
  txt += `\nPenggunaan: ${usedPrefix}hapusnote 1`
  if (text.length == 0) return m.reply(txt)
  let note = global.db.data.users[m.sender].note
  let split = text.split('|')
  if (note.length == 0) return m.reply('Kamu belum memiliki note!')
  let n = Number(split[0]) - 1
  if (note[n] == undefined) return m.reply('Catatan tidak ditemukan!')
  let tmp = []

  for (let ct in note) {
    if(ct != n) {
      tmp.push(note[ct])
    } else {
      continue
    }
  }

  cdang = global.db.data.users[m.sender].note
  global.db.data.users[m.sender].note = tmp

conn.reply(m.chat, `Berhasil menghapus note!`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['hapusnote title']
handler.tags = ['note']
handler.command = /^hapusnote$/i

export default handler