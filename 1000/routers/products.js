const express = require ("express");
const path = require ("path");
const router = express.Router ();
const productsController = require ('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
//router.post('/', productsController.store); 
//router.post('/:id', productsController.store);
router.get('/:id/create', productsController.store);


/*** GET ONE PRODUCT ***/ 
//router.get('/detail/:id', productsController.detail); 
router.get('/:id/detail', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
//router.patch('/:id', productsController.update); 
router.get('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
//router.delete('/:id', productsController.destroy);
router.get('/:id/delete', productsController.destroy); 

module.exports = router;