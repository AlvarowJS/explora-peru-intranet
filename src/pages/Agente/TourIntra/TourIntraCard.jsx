import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tour.css'
const TourIntraCard = ({ tour }) => {
    const navigate = useNavigate()
    let img = tour.img
    img = `https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${img}`
    const verTour = (id) => {
        navigate(`/tour-intranet/${id}`)
    }
    return (
        <>
            <div className='row align-items-center mx-2 my-4' >
                <div className='col-md-3 col-sm-12'>
                    <img src={img} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                </div>

                <div className='col-md-6 col-sm-6'>
                    <h2 style={{ color: '#DC8A4A' }}>{tour.titulo}</h2>
                    <p>{(tour.descripcion_spanish).substring(0, 100) + "..."}</p>
                    <div>
                        <p>{tour.duracion} Horas</p>

                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <button className='btn' style={{ backgroundColor: '#DC8A4A', color: 'white', borderRadius: '20px' }} onClick={() => verTour(tour.id)}>Más Información</button>
                </div>

            </div>
        </>
    )
}

export default TourIntraCard