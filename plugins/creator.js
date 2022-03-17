const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;VERDI;;;'
                    + 'FN:VERDIBOTZ1n' // full name
                    + 'ORG:6283869803330;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62838698033330:+62 85706735450\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'verdi', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
