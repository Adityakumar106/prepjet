const express = require('express');
const router = express.Router();
const purchaseController = require('../Controllers/purchase.controller');
const { authenticateUser } = require('../Middlewares/auth.middleware');

router.use(authenticateUser);

router.post('/', purchaseController.createPurchase);
router.get('/user/:userId', purchaseController.getPurchasesByUser);
router.get('/:id', purchaseController.getPurchaseById);
router.put('/:id', purchaseController.updatePurchase);
router.delete('/:id', purchaseController.deletePurchase);

module.exports = router;
