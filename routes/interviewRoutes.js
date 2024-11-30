const express = require("express");
const {
    deleteInterviewByIdContoller,
    updateInterviewByIdContoller,
    createInterviewContoller,
    getTotalInterviewsController,
    
} = require('../controllers/interviewController');

const interviewRouter = express.Router();




interviewRouter.post("/", createInterviewContoller);
interviewRouter.delete('/:id',deleteInterviewByIdContoller);
interviewRouter.put('/:id', updateInterviewByIdContoller);
interviewRouter.get("/totalInterviews/", getTotalInterviewsController);


module.exports = interviewRouter;
