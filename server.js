const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 9000

const homeRoutes = require('./router/homeRoutes')
const authRoutes = require('./router/authRoutes')
const devRoutes = require('./router/devRoutes')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/config.env'})

require('./config/passport')(passport)

connectDB()

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(
    session({ 
        secret: 'cats', 
        resave: false, 
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_DB }),
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/dev', devRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})