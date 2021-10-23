class NewsController {
    // [GET] - news
    index(req, res) {
        res.render('news');
    }

    // [GET] - news/:slug
    show(req, res) {
        res.send('Vao Slug thanh cong!');
    }
}


module.exports = new NewsController;