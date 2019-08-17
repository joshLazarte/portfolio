const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/resume', (req, res) => {
  const file = path.join('./docs', 'Josh-Lazarte-Resume.pdf');
  res.download(file, err => {
    if (err) {
      console.log(err);
      res.send('There was an error downloading the file');
    }
  });
});

module.exports = router;
