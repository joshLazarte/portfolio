const express = require('express'),
  router = express.Router(),
  { transporter, getMailOptions } = require('../config/email'),
  verifyRecaptcha = require('./utils/recaptcha');

//@todo verifyRecaptcha,
router.post('/', (req, res) => {
  transporter.sendMail(getMailOptions(req.body.email), (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server Error...' });
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.status(200).json({ msg: 'Email Sent!' });
});

module.exports = router;
