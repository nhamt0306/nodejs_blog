const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/NewsController');

router.use('/:slug', newscontroller.show);
router.use('/', newscontroller.index); // path / luôn ở dưới vì khi truy cập là từ trang con trở ra.

        module.exports = router;
