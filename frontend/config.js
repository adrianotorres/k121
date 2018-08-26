module.exports = (app) => {
    app.get('*', (_req, res) => {
        res.sendFile(`${__dirname}/index.html`)
    })
}
