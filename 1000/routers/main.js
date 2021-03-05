const express = require ("express");
const path = require ("path");
const router = express.Router ();
const mainController = require ('../controllers/mainController');

//*** HOME */

router.get('/', mainController.index);

//** REGISTER */

router.get('/register', mainController.register);
    
//** LOGIN */

router.get ('/login', mainController.login);

//** SEARCH */

router.get ('/search')

//COMENTAR

router.get ('/list', mainController.list)

module.exports = router;