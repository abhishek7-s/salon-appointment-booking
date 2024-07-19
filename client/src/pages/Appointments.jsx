import React , {useState ,useEffect} from 'react'
import Appoint from '../components/Appointments'

function Appointments(){
    const [appointments, setAppointments] = useState([])
    const [date, setDate] = useState(new Date().getDate())

    console.log(date)
    useEffect(() => {
        let getData = async () => {
            const response = await fetch(`http://localhost:3000/appointments/${date}`)
            const data = await response.json()
            setAppointments(data.Appointments)
            console.log(appointments)
          }
        getData()
    }, [date])
    
    // setInterval(async () => {
    //     const response = await fetch("http://localhost:3000/appointments/16")
    //     const data = await response.json()
    //     setAppointments(data.Appointments)
    //     // console.log(appointments)
    // }, 50000);


    return (
        <>
            <div className="flex justify-center items-center">
                <button className="bg-black text-white p-1 px-2 m-2 rounded" onClick={()=> setDate(date-1)}>Prev Day</button>
                
                <div className= "bg-black h-full text-white px-2 p-1 m-1 rounded">
                    {date}
                </div>
                <button className="bg-black text-white p-1 px-2 m-2 rounded" onClick={()=> setDate(date+1)}>Next Day</button>

            </div>
            <Appoint appointment={appointments}/>   
        </>
    )
}



export default Appointments
