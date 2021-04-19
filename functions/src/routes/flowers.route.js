const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/list', (req, res) => {
    // return flowers from DB
    res.sendStatus(200);
});

module.exports = router;
