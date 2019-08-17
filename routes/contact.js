const express = require('express'),
  router = express.Router(),
  { transporter, getMailOptions } = require('../config/email'),
  verifyRecaptcha = require('./utils/recaptcha');

//@todo verifyRecaptcha,
router.post('/', (req, res) => {
  transporter.sendMail(getMailOptions(req.body.email), (error, info) => {
    if (error) return console.log(error);
    console.log('Message sent: %s', info.messageId);
  });

  res.status(200).json({ msg: 'Email Sent!' });
});

module.exports = router;
