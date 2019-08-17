const express = require('express'),
  router = express.Router(),
  { transporter, getMailOptions } = require('../config/email'),
  verifyRecaptcha = require('./utils/recaptcha');

router.post('/', verifyRecaptcha, (req, res) => {
  transporter.sendMail(getMailOptions(req.body.email), (error, info) => {
    if (error) return res.status(500).json({ msg: 'Server Error...' });
    console.log('Message sent: %s', info.messageId);
  });

  res.status(200).json({ msg: 'Email Sent!' });
});

module.exports = router;
