const express = require('express');
const candidatRouter = require('./routes/candidatRoutes');
const interviewRouter = require('./routes/interviewRoutes');
const recruiterRouter=require('./routes/recruiterRoutes');

const dotenv=require('dotenv');
dotenv.config();
const {dbConnect}=require('./config/dbConnect');
dbConnect();

const app = express();
app.use(express.json());

app.use('/api/candidates/',candidatRouter);
app.use('/api/interviews/',interviewRouter);
app.use('/api/recruiters/',recruiterRouter);




const PORT = process.env.PORT||3000;
app.listen(PORT,console.log(`Serveur démarré sur http://localhost:${PORT}`)
);
