import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tour.css'
const TourIntraCard = ({ tour }) => {
    const navigate = useNavigate()
    let img = tour.img
    img = `https://backend.peruexploring.pe/storage/tours/${tour.titulo}/${img}`
    const verTour = (id) => {
        navigate(`/tour-intranet/${id}`)
    }
    return (
        <>
            <div className='tourintra__card' onClick={() => verTour(tour.id)}>
                <div className='tourintra__card-img'>
                    <img src={img} alt="" />
                </div>
                <div className='tourintra__card-desc'>
                    <h2>{tour.titulo}</h2>
                    <p>{(tour.descripcion_spanish).substring(0, 100) + "..."}</p>
                    <div>
                        <p>{tour.duracion}</p>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default TourIntraCard