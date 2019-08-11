require('dotenv').config({path: '.env'}); // env variables.
const express = require('express');
const app = express();
app.use(express.json()); // come back as json.
const mongoose = require('mongoose'); // mongodb in an oop way :3
const cors = require('cors'); // pass some middleware
app.use(cors());
const PORT = 4000; // backend port.

// Routes:
const categoryRouter = require('./routes/category.routes');
app.use('/categories', categoryRouter);
const emailRouter = require('./routes/email.routes');
app.use('/emails', emailRouter);
const jobIdCategoryIdRouter = require('./routes/jobIdCategoryId.routes');
app.use('/jobIdCategoryIds', jobIdCategoryIdRouter);
const jobRouter = require('./routes/job.routes');
app.use('/jobs', jobRouter);
const skillLevelNamesRouter = require('./routes/skillLevelNames.routes');
app.use('/skillLevelNames', skillLevelNamesRouter);
const teamRoleRouter = require('./routes/teamRole.routes');
app.use('/teamRoles', teamRoleRouter);
const teamRouter = require('./routes/team.routes');
app.use('/users', teamRouter);
const userIdTeamIdRouter = require('./routes/userIdTeamId.routes');
app.use('/userIdTeamIds', userIdTeamIdRouter);
const userSkillRouter = require('./routes/userSkill.routes');
app.use('/userSkills', userSkillRouter);
const userRouter = require('./routes/user.routes');
app.use('/users', userRouter);

// Connections:
mongoose.connect(process.env.REACT_APP_MONGODB_CONNECTION_STRING, 
  { useNewUrlParser: true,
    useCreateIndex: true
  });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully!');
});

app.listen(PORT, function() { 
  console.log('Server is listening on port ' + PORT);
})
