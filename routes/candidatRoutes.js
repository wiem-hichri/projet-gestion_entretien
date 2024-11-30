const express = require("express");
const {
    GetAllCandidatContoller,
    deleteCandidatByIdContoller,
    createCandidatContoller,
    SuiviEvaluationCandidatByIdController,
    
} = require('../controllers/candidatController');

const candidatRouter = express.Router();




candidatRouter.post("/", createCandidatContoller);
candidatRouter.delete('/:id',deleteCandidatByIdContoller);
candidatRouter.get('/', GetAllCandidatContoller);
candidatRouter.get('/:id', SuiviEvaluationCandidatByIdController);


module.exports = candidatRouter;
