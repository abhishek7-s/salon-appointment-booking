const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const { Appointment , Users } = require('./database/db')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const PORT = 3000
const jwtPass = "12345"

const convertTime = (timeStr) => {
    const [hours, minutes] = timeStr.split('.').map(Number);
    return hours * 60 + (minutes || 0);
};

app.get('/appointments',async (req,res)=>{
    const data = await Appointment.find({})
    data.sort((a, b) => convertTime(a.Date) - convertTime(b.Date));
    res.json({
        "Appointment": data
    })
})

app.get('/appointments/:date',async (req,res)=>{
    const date = req.params.date;
    const data = await Appointment.find({
        Date: date
    })

    data.sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.Time}:00Z`);
        const timeB = new Date(`1970-01-01T${b.Time}:00Z`);
        return timeA - timeB;
    });
    
    // data.sort((a, b) => convertTime(a.Time) - convertTime(b.Time));

    res.json({
        "Appointments": data
    })
})

app.post('/signup' ,async (req,res)=>{
    const name = req.body.name 
    const email = req.body.email
    const password = req.body.password 
    const isAdmin = req.body.isAdmin
    try {
        await Users.create({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
        })
        res.json({
            msg: "User Added successfully"
        })
    } catch (err) {
        res.send("something wrong" + err)
    } 
})

app.post('/login' , async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const emailPresent = await Users.findOne({email : email})
    if (emailPresent && emailPresent.password == password) {
        let token = jwt.sign({email : email} , jwtPass);
        res.status(200).json({
            token : token
        })
    }
    else{
        res.status(400).json({
            msg: "Invalid User info"
        })
    }
})

app.post('/setAppintment' ,async (req,res)=>{
    const name = req.body.name 
    const contact = req.body.contact
    const Gender = req.body.Gender
    const service = req.body.service
    const date = req.body.date
    const time = req.body.time
    
    try {
        await Appointment.create({
            name: name,
            contact: contact,
            Gender: Gender,
            service: service,
            Date: date,
            Time: time,
        })
        res.json({
            msg: "Done successfully"
        })
    } catch (err) {
        res.send("something wrong" + err)
    } 
})

app.delete('/delete-appointments', async (req,res)=>{
    const id = req.body.id
    try {
        const selected = await Appointment.findOne({_id : id})
        if (selected) {
            await Appointment.deleteOne({_id : id})
            res.status(202).json("Appointment cancelled")
        } else {
            res.status(400).json("Not found")
        }
    } catch (error) {
        res.json({
            msg: "invalid Id"
        })
    }
    
})

app.listen(PORT,()=>{
    console.log("hello server")
})