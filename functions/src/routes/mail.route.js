const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/order', (req, res) => {
    // send mail with order
    res.sendStatus(200);
});

module.exports = router;
