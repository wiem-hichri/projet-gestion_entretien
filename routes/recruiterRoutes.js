const express = require("express");
const {
    createRecruiterContoller,
    GetRecruiterWithInterviewByIdContoller,
    loginController,
    
} = require('../controllers/recruiterController');

const recruiterRouter = express.Router();




recruiterRouter.post("/", createRecruiterContoller);
recruiterRouter.get("/:id", GetRecruiterWithInterviewByIdContoller);
recruiterRouter.post("/", loginController);






module.exports = recruiterRouter;
