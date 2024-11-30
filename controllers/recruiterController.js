
const Recruiter = require("../models/Recruiter");
const Interview =require("../models/Interview");
const mongoose = require('mongoose');


const createRecruiterContoller = async (req,res) =>{
    try {

       
        const { name,email,password,} = req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const recruiter = await Recruiter.create({
            name,
            email,
            password:hashedPassword,
            
           

        });

        res.json({
            status: "success",
            data : recruiter,
        })

    } catch (error) {
        res.json(error.message);        
    }
};




const GetRecruiterWithInterviewByIdContoller = async (req, res) => {
    try {
        
        const recruiterId = req.params.id;
        const recruiter = await Recruiter.findById(recruiterId);
        const interviews = await Interview.find({ recruiterId: recruiterId }).select('_id name feedback');
        const result = {
            ...recruiter.toObject(), 
            interviews: interviews, 
          };
        
        res.json({
            status: "success",
            data: result,
        });
    } catch (error) {
        
        res.json({
            status: "error",
            message: error.message,
        });
    }
};

const loginController = async (req, res) => {
    try {
        const { login, password } = req.body;
        
        const recruiter = await Recruiter.findOne({ login });
        if (!recruiter) {
            return res.status(404).json({ message: "recruiter not found" });
        }

        const isMatch = await bcrypt.compare(password, recruiter.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ recriuterId: recruiter._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            status: "success",
            token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    GetRecruiterWithInterviewByIdContoller,
    createRecruiterContoller,
    loginController,
}