import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';
import './TourInfo.css'
const TourIntraCardInfo = () => {

    const id = useParams();
    const [tour, setTour] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        toursBD.get(`/${id.id}`)
            .then(res => {
                setTour(res.data)
                setTourImg(`https://backend.peruexploring.pe/public/storage/tours/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    const descargarItinerarioEspaniol = () => {

        window.open(`https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${tour.archivo_spanish}`, '_blank')
    }
    const descargarItinerarioEnglish = () => {
        window.open(`https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${tour.archivo_english}`, '_blank')
    }
    return (
        <div className='container'>
            <Link to='/tour-intranet'>
                <i className='bx bxs-chevron-left-circle' style={{fontSize: 40, marginTop: 20}}></i>
            </Link>
            <h2 style={{color: '#DC8A4A'}}>{tour?.titulo}</h2>

            <div className='tourinfo'>
                <img src={tourImg} alt="" />
                <div className='tourinfo__info'>
                    <h4>{tour?.titulo}</h4>
                    <p>{tour?.descripcion_spanish} </p>
                    <div className='tour__info-button'>
                        <button
                            className='btn btn-success'
                            style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                            onClick={descargarItinerarioEspaniol}
                        >
                            Descargar Itinerario en Español
                        </button>
                        <button
                            className='btn btn-success'
                            style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                            onClick={descargarItinerarioEnglish}
                        >
                            Download Itinerary in English
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TourIntraCardInfo