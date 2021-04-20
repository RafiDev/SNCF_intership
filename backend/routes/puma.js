module.exports = (app) => {
    app.get('/puma', (req, res) => {
        res.render('index', {title: 'Puma'});
    });
}