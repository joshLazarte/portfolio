const express = require('express'),
    router = express.Router(),
    { transporter, getMailOptions } = require('../config/email');


router.post("/", (req, res) => {
    transporter.sendMail(getMailOptions(req.body.email), (error, info) => {
        if (error) return console.log(error);
        console.log('Message sent: %s', info.messageId);
    });
    res.render("index");
});

module.exports = router;
