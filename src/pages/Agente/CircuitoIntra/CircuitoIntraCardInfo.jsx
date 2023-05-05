import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './CircuitoInfo.css'
import circuitosBD from '../../../apis/circuitos';
const CircuitoIntraCardInfo = () => {

    const id = useParams();
    const [circuito, setCircuito] = useState()
    const [circuitoImg, setCircuitoImg] = useState()
    useEffect(() => {
        circuitosBD.get(`/${id.id}`)
            .then(res => {
                setCircuito(res?.data)
                setCircuitoImg(`https://backend.peruexploring.pe/storage/circuitos/${res?.data.titulo}/${res?.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])

    const descargarItinerarioEspaniol = () => {

        window.open(`https://backend.peruexploring.pe/storage/circuitos/${circuito.titulo}/${circuito.archivo_spanish}`, '_blank')
    }
    const descargarItinerarioEnglish = () => {
        window.open(`https://backend.peruexploring.pe/storage/circuitos/${circuito.titulo}/${circuito.archivo_english}`, '_blank')
    }
    return (
        <div className='container'>
            <Link to='/circuito-intranet'>
                <i className='bx bx-left-arrow-alt mt-4'></i>   Regresar
            </Link>
            <h2>{circuito?.titulo}</h2>

            <div className='circuitoinfo'>
                <div className='circuitoinfo__img'>
                    <img src={circuitoImg} alt="" />
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
                <div className='circuitoinfo__info'>
                    <h4>{circuito?.titulo}</h4>
                    {/* <p>{circuito?.descripcion_spanish} </p> */}
                    {
                        circuito?.dias?.map(dia => (
                            <>
                                <h4>- {dia?.nombre} / {dia?.horario}</h4>
                                <p> {dia?.descripcion}</p>
                            </>
                        ))
                    }
                    <div className='circuitoinfo__datos'>
                        <h4>Incluye</h4>
                        {
                            circuito?.incluye_spanish.split('\n').map((item, index) => (
                                <div key={index}>
                                    <p> {item}</p>
                                    <br />
                                </div>
                            ))
                        }
                        {/* <p>{circuito?.incluye_spanish}</p> */}
                        <h4>No incluye</h4>
                        {
                            circuito?.no_incluye_spanish.split('\n').map((item, index) => (
                                <div key={index}>
                                    <p> {item}</p>
                                    <br />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CircuitoIntraCardInfo