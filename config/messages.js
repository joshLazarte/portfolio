module.exports = (req, res, next) => {
    res.locals.messages = require("express-messages")(req, res);
    next();
};
