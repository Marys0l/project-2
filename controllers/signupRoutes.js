const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      res.render('login' )
    } catch (error) {res.status(500).json(err);
      
    }
  });
  
  module.exports = router;
