import React ,{useState} from 'react'
import { ToastContainer ,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import axios from 'axios'
function BookAppoint() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        gender: '',
        service: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "name": formData.name,
            "contact": formData.contact,
            "Gender": formData.gender,
            "service": formData.service,
            "date": formData.date,
            "time": formData.time
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/setAppintment',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        console.log('Form Data Submitted:', formData);
        toast.success("Appointment Booked successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        setFormData({
            name: '',
            contact: '',
            gender: '',
            service: '',
            date: '',
            time: ''
        })
    };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-black h-full p-10 px-20 m-10 text-white rounded-2xl">
        <h1 className="font-bold text-2xl p-2">Book Your Appoinment</h1>
        <div className="flex flex-col justify-center items-center font-bold p-2">
                <div className="">
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="">
                    <label htmlFor="contact">Contact:</label>
                    <br/>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white"
                    />
                </div>
                <div className=" ">
                    <label htmlFor="gender">Gender:</label>
                    <br/>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        required
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="service">Service:</label>
                    <br/>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        required
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Select Service</option>
                        <option value="Cutting">Cutting</option>
                        <option value="Colouring">Colouring</option>
                        <option value="Shaving">Shaving</option>
                        <option value="Beard">Beard</option>
                    </select>
                    
                </div>
                <div className="">
                    <label htmlFor="date">Date:</label>
                    <br/>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="DD"
                        pattern="\d{2}"
                        title="Please enter a valid date (e.g., 01, 12)"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="">
                    <label htmlFor="time">Time:</label>
                    <br/>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <button className="bg-slate-700 rounded-md p-2 m-3" type="submit">Submit</button>
        </div>        
    </form>
    <ToastContainer />
    </>
  )
}

export default BookAppoint
