
const Candidat = require("../models/Candidat");
const Interview =require("../models/Interview");
const mongoose = require('mongoose');


const createCandidatContoller = async (req,res) =>{
    try {

       
        const { name,email,status} = req.body;

        const candidat = await Candidat.create({
            name,
            email,
            status ,
            
           

        });

        res.json({
            status: "success",
            data : candidat,
        })

    } catch (error) {
        res.json(error.message);        
    }
};

const GetAllCandidatContoller = async (req,res) => {
    try {

        const  candidates = await Candidat.find();
        res.json({
            status: "success",
            data: candidates,
        })
    } catch (error) {
        res.json(error.message);        
    }
};

const SuiviEvaluationCandidatByIdController=async(req,res)=>{
    try{
        const candidatId=req.params.id;
        const candidat=await Candidat.findById(candidatId);
        const interviews = await Interview.find({ candidateId: candidatId }).select('_id feedback');
        const result = {
            ...candidat.toObject(), 
            interviews: interviews, 
          };

        res.json({
            status:'success',
            data:result,
        });
    }catch(error){
        res.json(error.message);
    }
};
const deleteCandidatByIdContoller = async (req,res) => {
    try {
        const candidatId=req.params.id;
        const candidat= await Candidat.findByIdAndDelete(candidatId);
        res.json({
            status: "success",
            message: "candidat deleted successfully",
            
        })
    } catch (error) {
        res.json(error.message);        
    }
};






module.exports = {
    GetAllCandidatContoller,
    deleteCandidatByIdContoller,
    createCandidatContoller,
    SuiviEvaluationCandidatByIdController,
}