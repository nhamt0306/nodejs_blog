const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controllers/SiteController');

router.use('/:search', sitecontroller.search)
router.use('/', sitecontroller.index); // path / luôn ở dưới vì khi truy cập là từ trang con trở ra.

module.exports = router;