const express = require('express'),
    router = express.Router(),
    { transporter, getMailOptions } = require('../config/email'),
    verifyRecaptcha = require('./utils/recaptcha');


router.post("/", verifyRecaptcha, (req, res) => {
    transporter.sendMail(getMailOptions(req.body.email), (error, info) => {
        if (error) return console.log(error);
        console.log('Message sent: %s', info.messageId);
    });
    req.flash("success", "Message Sent");
    res.redirect("/#contact");
});

module.exports = router;
