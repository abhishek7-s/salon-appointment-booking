const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://abhisheksharma7124:jobpetKqAtuGusAA@cluster0.xifvoas.mongodb.net/Salon-App');

const AppointmentSchema = new mongoose.Schema({
    name: String,
    contact: String,
    Gender: String,
    service: String,
    Date: String,
    Time: String,
    status: Boolean,
})
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)
const Users = mongoose.model('Users', UserSchema)

module.exports = {
    Appointment,
    Users
}