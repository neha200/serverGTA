const express = require("express");
const mentorRoutes = require("./routes/mentor/MentorRoutes");
const traineeRoutes = require("./routes/trainee/TraineeRoutes");
const taskRoutes = require("./routes/task/TaskRoutes");
const cors=require("cors")
// const taskRoutes=require("./routes/task/TaskRoutes")

const app = express();
const port = 9090;
app.use(cors())
// custom middleware logger

//Cross Origin Resource Sharing

app.use(express.urlencoded({ extended: false })); //built-in middleware for form data or encoded data
app.use(express.json()); //built-in middleware to handle json

//serve static files

// routes login
// app.use('/', require('./routes/root'));
// app.use('/register', require('./routes/register'));
// app.use('/auth', require('./routes/auth'));
// app.use('/refresh', require('./routes/refresh'));
// app.use('/logout', require('./routes/logout'));

app.use("/mentor", mentorRoutes);
app.use("/trainee", traineeRoutes);
app.use("/task",taskRoutes);
// app.use("/task",taskRoutes);
//endpoint 2
// app.use("/trainee",require('./routes/api/TraineeRoutes'));

app.listen(port, () => console.log(`app listeing on port ${port}`));

// app.all('*', (req, res) => {
//     res.status(404);
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'));
//     } else if (req.accepts('json')) {
//         res.json({ "error": "404 Not Found" });
//     } else {
//         res.type('txt').send("404 Not Found");
//     }
// });
