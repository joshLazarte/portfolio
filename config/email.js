const nodemailer = require('nodemailer'),
    getEmailTemplate = require('../templates/email');

const transporter = nodemailer.createTransport({
    host: process.env.EMAILHOST,
    port: process.env.EMAILPORT,
    secure: false,
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

const getMailOptions = (data) => {
    return {
        from: `"jlazarte.com" <${process.env.EMAILUSER}>`,
        to: process.env.EMAILUSER,
        subject: data.subject,
        html: getEmailTemplate(data)
    };
};

module.exports = {
    transporter,
    getMailOptions
};
