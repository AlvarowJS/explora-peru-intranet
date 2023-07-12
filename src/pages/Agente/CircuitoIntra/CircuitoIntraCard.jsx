import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Circuito.css'
const CircuitoIntraCard = ({ circuito }) => {
    const navigate = useNavigate()
    let img = circuito.img
    img = `https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${img}`
    const verCircuito = (id) => {
        navigate(`/circuito-intranet/${id}`)
    }
    return (
        <>

            <div className='row align-items-center' >
                <div className='col-3'>
                    <img src={img} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                </div>

                <div className='col-6'>
                    <h2>{circuito?.titulo}</h2>
                    <h4>Dias:</h4>
                    <p>{(circuito?.dias).length}</p>
                    <div>
                        <p>{circuito?.duracion}</p>

                    </div>
                </div>
                <div className='col-3'>
                    <button className='btn' style={{ backgroundColor: '#DC8A4A', color: 'white', borderRadius: '20px' }} onClick={() => verCircuito(circuito?.id)}>Más Información</button>
                </div>

            </div>
        </>
    )
}

export default CircuitoIntraCard