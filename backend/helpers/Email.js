const nodeMailer = require('nodemailer')
let emailSentInfos = []
const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    pool: true,
    rateLimit: true,
    maxConnections: 1,
    maxMessages: 3
})

const enviarEmail = async pessoa => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
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
