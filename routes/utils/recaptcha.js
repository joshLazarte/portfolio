const request = require('request');

const verifyRecaptcha = (req, res, next) => {
  const captcha = req.body.email.token;

  if (captcha === undefined || captcha.trim() === '' || captcha === null) {
    return res.status(400).json({ msg: 'reCaptcha Failed' });
  }

  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${
    process.env.CAPTCHASECRET
  }&response=${captcha}&remoteip=${req.connection.remoteAddress}`;

  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);
    if (
      (body.success !== undefined && !body.success) ||
      body.action !== 'contact'
    ) {
      return res.status(400).json({ msg: 'reCaptcha Failed' });
    }
    next();
  });
};

module.exports = verifyRecaptcha;
