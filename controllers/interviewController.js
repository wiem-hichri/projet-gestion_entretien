
const Recruiter = require("../models/Recruiter");
const Interview =require("../models/Interview");
const Candidat = require("../models/Candidat");

const mongoose = require('mongoose');


const createInterviewContoller = async (req,res) =>{
    try {

       
        const { date,time,recruiterId,candidateId,feedback} = req.body;

        const interview = await Interview.create({
            date,
            time,
            recruiterId,
            candidateId,
            feedback
           

        });

        res.json({
            status: "success",
            data : interview,
        })

    } catch (error) {
        res.json(error.message);        
    }
};

const updateInterviewByIdContoller = async (req,res) => {
    try {
        const interviewId = req.params.id; 
        const { date,time,recruiterId,candidateId,feedback } = req.body;
        const updatedInterview = await Interview.findByIdAndUpdate(
            interviewId,{ date,time,recruiterId,candidateId,feedback },     
        );
        res.json({
            status: "success",
            data: updatedInterview,
        })
    } catch (error) {
        res.json(error.message);        
    }
};

const deleteInterviewByIdContoller = async (req,res) => {
    try {
        const interviewId=req.params.id;
        const interview= await Interview.findByIdAndDelete(interviewId);
        res.json({
            status: "success",
            message: "Interview deleted successfully",
            
        })
    } catch (error) {
        res.json(error.message);        
    }
};

const getTotalInterviewsController = async (req, res) => {
    try {
        const nbInterviews = await Interview.countDocuments();
        res.json({
            status: "success",
            total: nbInterviews,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};


module.exports = {
    deleteInterviewByIdContoller,
    updateInterviewByIdContoller,
    createInterviewContoller,
    getTotalInterviewsController,
}