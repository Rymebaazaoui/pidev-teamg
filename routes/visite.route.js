var express = require('express');
var router = express.Router();
const VisiteController = require("../controllers/visite.controller");

router.put('/update/:id',VisiteController.updateVisite); //X
router.get('/getAll', VisiteController.showAllvisite); //X
router.post('/create', VisiteController.create); //X
router.delete('/deleteVisite/:id', VisiteController.deleteVisiteById); //
router.get('/getVisite/:id', VisiteController.getSpecificVisite); //X
router.post('/addLieu/:id', VisiteController.addVisiteLieu);
router.post('/searchPerDate',VisiteController.searchVisitePerDate); //X
router.post('/searchPerDateBefore',VisiteController.searchByDateBefore); //X
router.post('/searchPerDateAfter',VisiteController.searchByDateAllAfter); //X
module.exports = router;