const request = require('request');

const verifyRecaptcha = (req, res, next) => {
    var captcha = req.body["g-recaptcha-response"];

    if (captcha === undefined ||
        captcha === '' ||
        captcha === null) {
        req.flash("danger", "Recaptcha Missing");
        return res.redirect("/#contact");
        
    }

    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHASECRET}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;

    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            req.flash("danger", "Recaptcha Failed");
            return res.redirect("/#contact");
        }
        next();
    });
};

module.exports = verifyRecaptcha;
