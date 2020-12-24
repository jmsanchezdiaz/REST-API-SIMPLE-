const { Router } = require('express');
const router = Router();

const {getUser} = require('../controllers/controllers.js');
const {getUserById} = require('../controllers/controllers.js');
const {setUser} = require('../controllers/controllers.js');
const {delUser} = require('../controllers/controllers.js');
const {updUser} = require('../controllers/controllers.js');

//Rutas
router.get('/users',getUser);
router.post('/users',setUser);
router.get('/users/:userid',getUserById);
router.delete('/users/:userid',delUser);
router.put('/users/:userid',updUser);

module.exports = router;