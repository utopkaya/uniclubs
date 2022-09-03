import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import { Subscribe } from "./models/Subscribe.js"
import alert from "alert-node"
import fs from "fs"


const port = process.env.PORT || 3000
const host = 'localhost'
const app = express()

// database connection
conn()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// dotenv conf
dotenv.config()

// static files
app.use(express.static('public'))

// Middlewares
app.set("view engine", "ejs")

// index page
app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/save', (req,res) => {
//     Subscribe.create({
//         mail: "umuttopkayaa@gmail.com"
//     })

//     res.redirect('/')
// })

// subscribe action
// app.post('/subscribe', (req, res) => {
//     // registered mail

//     Subscribe.create({ email: req.body.email }, (error, subs) => { console.log(error, subs); })
//     console.log("e-mail adresi: " + req.body.email);
//     res.redirect("/")

// })

app.post("/save", (req,res) => {

    Subscribe.create({
        ...req.body
    })


    fs.appendFile("./subscribers/SubscribeList.txt",`\n${req.body.email}`, (err)=>{
        if(err){
            console.log(err);
        }
    })


    res.redirect("/")
})

app.listen(port, () => {
    console.log(`server is online : http://${host}:${port}`);
})
