/**
 *  =================>IMPORT STATEMENTS
 */
// ----------------------->>>>>>>>>>>>>>>>>>> Importing packages
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParse from 'cookie-parser'
import { config } from 'dotenv'
import path from 'path'

///////// ------------------------>>>>>>>>>>>>>> Importing routes
import subjectRoute from './routes/subject.route'
import authRoute from './routes/user.route'
import studentRoute from './routes/student.route'
import employeeRoute from './routes/employee.route'
import departmentRoute from './routes/department.route'
import classRoomRoute from './routes/section.routes'
import classSubject from './routes/classSubject.route'
import isUserExists from './_middleware/isUserExists'
import isLoggedIn from './_controllers/user/isLoggedIn'
import subFac from './routes/sub-fac.route'
import timetable from './routes/timetable.route'
import studentPage from './routes/Student.page.routes'
import meetings from './routes/meetings.routes'
import facPages from './routes/faculty.page.routes'
import noti from './routes/notification.routes'
import notes from './routes/Notes.routes'
import circular from './routes/circular.routes'
import assignment from './routes/assignment.routes'

// configuring dotenv package
config();

// mongoose conection
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_CONFIG, {
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database connected!, successfullly.')
  },
  error => {
    console.log('Could not connect to database : ', error)
  }
)


// init express
const app = express()
// init body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
// init cookie parse
app.use(cookieParse())
// init cors
app.use(cors())


// init routes
app.use('/', authRoute)
app.use('/is-login', isLoggedIn)
app.use(`/api`, isUserExists, studentRoute)
app.use(`/api`, isUserExists, employeeRoute)
app.use(`/api`, isUserExists, departmentRoute)
app.use(`/api`, isUserExists, classRoomRoute)
app.use(`/api`, isUserExists, subjectRoute)
app.use(`/api`, isUserExists, classSubject)
app.use(`/api`, isUserExists, subFac)
app.use(`/api`, isUserExists, timetable)
app.use(`/api`, isUserExists, studentPage)
app.use(`/api`, isUserExists, facPages)
app.use(`/api/meeting`, isUserExists, meetings)
app.use('/api/notification', isUserExists, noti)
app.use('/api/notes', isUserExists, notes)
app.use('/api/circular', isUserExists, circular)
app.use('/api/assignments', isUserExists, assignment)

// Server code


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('__client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
  })
}



// Server Code end


//PORT
const port = process.env.PORT
const server = app.listen(port, () => console.log('Connected to port', port))
console.log(server)

// 404 ERROR
app.use((req, res, next) => {
  next(res.status(400).json({ message: "Page Not Found", code: 404 }));
})

app.use((err, req, res, nxt) => {
  console.log(err)
  if (!err.statusCode)
    err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})









// const app = express()
// app.use(express.json())
// // connecct
// const $database = 'e_study'
// const $password = '04922251pk'
// mongoose.connect(`mongodb+srv://analytics:${$password}@mflix.fdf7i.mongodb.net/${$database}?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// const DB = mongoose.connection

// DB.on('error', console.error.bind(console, 'error'))
// DB.once('open', () => console.log('connected'))

// const AuthRoute = require('./routes/login.route')

// app.use('/', AuthRoute)

// app.listen(5000, () => console.log("started"))