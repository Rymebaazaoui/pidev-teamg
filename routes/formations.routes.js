var express = require('express');
var router = express.Router();
const FormationController = require("../controllers/formations.controller");

router.get('/', FormationController.showAllformations);
router.post('/create', FormationController.create);
router.post('/addType/:id', FormationController.addFormationType);
router.delete('/deleteFormation/:id', FormationController.deleteFormationById);
router.put('/updateFormation/:id', FormationController.updateFormation);
router.get('/searchFormation/:id', FormationController.searchFormation);
//  router.put('/updateFormationtype/:id', FormationController.updateFormationtype);

module.exports = router;