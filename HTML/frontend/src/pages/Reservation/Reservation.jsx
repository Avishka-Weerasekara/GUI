import React from 'react'
import './Reservation.css'
import DT from '../../components/Date and time/DT'
import ReservationForm from '../../components/ReservationForm/ReservationForm'


const Reservation = () => { 
return (
    <div>
        <div className="main-content-res">
          <div className="re-content">
            <h1>Reservation</h1>
            <DT/>
            <ReservationForm/>
          </div>
          
        </div>
    </div>
  )
}

export default Reservation
