const nodeMailer = require('nodemailer')
let emailSentInfos = []
const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '1e1c7ccf0930d5',
        pass: '36c43bf8f7bd62'
    },
    pool: true,
    rateLimit: true,
    maxConnections: 1,
    maxMessages: 3
})
const enviarEmail = async (pessoa) => {
    const mailOptions = {
        from: 'Amigo Secreto <amigo@secreto.com.br>',
        to: pessoa.email,
        subject: 'Sorteio do Amigo Secreto',
        text: `Olá ${pessoa.nome}, o seu amigo secreto é o(a) ${pessoa.amigoSecreto.nome}`
    }
    const info = await transporter.sendMail(mailOptions)
    emailSentInfos.push(info)
}

const enviarEmails = async pessoas => {
    const promises = pessoas.map(enviarEmail)
    await Promise.all(promises)
    return emailSentInfos
}

module.exports = { enviarEmails }
