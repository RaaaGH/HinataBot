let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
  let users = participants.map(u => u.presences).filter(v => v !== conn.user.jid)
    m.reply(`⛊──⛾「 ONLINE 」⛾──⛊\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛊──⛾「 ONLINE 」⛾──⛊', null, {
        mentions: users
    })
}
handler.help = ['online']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i

export default handler