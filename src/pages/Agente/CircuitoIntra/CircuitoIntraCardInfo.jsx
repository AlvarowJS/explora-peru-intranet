import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './CircuitoInfo.css'
import circuitosBD from '../../../apis/circuitos';
import logoExplora from './../../../assets/logo/logo.png'
const CircuitoIntraCardInfo = () => {

    const id = useParams();
    const [circuito, setCircuito] = useState()
    const [circuitoImg, setCircuitoImg] = useState()
    useEffect(() => {
        circuitosBD.get(`/${id.id}`)
            .then(res => {
                setCircuito(res?.data)
                setCircuitoImg(`https://backend.peruexploring.pe/public/storage/circuitos/${res?.data.titulo}/${res?.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])

    const descargarItinerarioEspaniol = () => {

        window.open(`https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${circuito.archivo_spanish}`, '_blank')
    }
    const descargarItinerarioEnglish = () => {
        window.open(`https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${circuito.archivo_english}`, '_blank')
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center' >
                <Link to='/circuito-intranet'>
                    <i className='bx bxs-chevron-left-circle' style={{ fontSize: 40, marginTop: 20 }}></i>
                </Link>
                <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', marginTop: 10 }} />
            </div>

            <h2 style={{ color: '#DC8A4A' }}>{circuito?.titulo}</h2>

            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img src={circuitoImg} alt="" style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='border rounded p-4'>
                        <h4 style={{ color: '#DC8A4A' }}>{circuito?.titulo}</h4>
                        {
                            circuito?.dias?.map(dia => (
                                <>
                                    <h4>- {dia?.nombre} / {dia?.horario}</h4>
                                    <p> {dia?.descripcion}</p>
                                </>
                            ))
                        }

                        <h4 style={{ color: '#DC8A4A' }}>Incluye</h4>
                        {
                            circuito?.incluye_spanish.split('\n').map((item, index) => (
                                <div key={index}>
                                    <p> {item}</p>
                                    <br />
                                </div>
                            ))
                        }
                        <h4 style={{ color: '#DC8A4A' }}>No incluye</h4>
                        {
                            circuito?.no_incluye_spanish.split('\n').map((item, index) => (
                                <div key={index}>
                                    <p> {item}</p>
                                    <br />
                                </div>
                            ))
                        }
                    </div>
                    <div className='d-flex gap-4'>
                        <button
                            className='btn btn-success'
                            style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                            onClick={descargarItinerarioEspaniol}
                        >
                            <i className='bx bxs-download'></i>
                            Descargar Itinerario en Español
                        </button>
                        <button
                            className='btn btn-success'
                            style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                            onClick={descargarItinerarioEnglish}
                        >
                            <i className='bx bxs-download'></i>
                            Download Itinerary in English
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CircuitoIntraCardInfo