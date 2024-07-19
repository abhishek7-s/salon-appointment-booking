import React from 'react'
import icon from '../assets/icon.svg'
function Appoint({appointment}) {
  return (
    <div>
        <div className="flex justify-center items-center p-1 mx-2 h-10 bg-black text-white rounded-md">
                <div className="w-1/12 h-full">
                    {/* <p>hi</p> */}
                </div>
                <div className="  w-3/6 px-4 font-bold border-x-2 border-black pl-2">
                    <h1 className="font-serif text-2xl">Name</h1>
                </div>
                <div className="w-1/4 pl-2">
                    <h2>Contact</h2>
                </div>
                <div className=" w-1/5 border-x-2 border-black pl-2">
                    <h2>Service</h2>
                </div>
                <div className=" w-1/6 pl-2">
                    <h2>Date</h2>
                </div>
                <div className=" w-1/6 border-x-2 border-black pl-2">
                    <h2>Scheduled Time</h2>
                </div>
        </div>
        {appointment.map((apt)=>{
            {/* console.log(apt._id) */}
            return <>
                <div key={apt._id} className="flex justify-center items-center p-1 m-2 h-16 bg-slate-500 rounded-md"> 
                    <div className=" w-1/12 h-full">
                        <img className="h-full" src={icon} alt="Logo" />
                    </div>
                    <div className="  w-3/6 px-4 font-bold">
                        <h1 className="font-serif text-2xl">{apt.name}</h1>
                    </div>
                    <div className=" w-1/4">
                        <h2>{apt.contact}</h2>
                    </div>
                    <div className=" w-1/5">
                        <h2>{apt.service}</h2>
                    </div>
                    <div className=" w-1/6">
                        <h2>{apt.Date}</h2>
                    </div>
                    <div className=" w-1/6">
                        <h2>{apt.Time}</h2>
                    </div>
                </div>
            </>
        })}
      
    </div>
  )
}

export default Appoint
