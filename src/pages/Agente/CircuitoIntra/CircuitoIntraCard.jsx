import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Circuito.css'
const CircuitoIntraCard = ({ circuito }) => {
    const navigate = useNavigate()
    let img = circuito.img
    img = `https://auxbackend.peruexploring.pe/storage/circuitos/${circuito.titulo}/${img}`
    const verCircuito = (id) => {
        navigate(`/circuito-intranet/${id}`)
    }
    return (
        <>
            <div className='circuitointra__card' onClick={() => verCircuito(circuito?.id)}>
                <div className='circuitointra__card-img'>
                    <img src={img} alt="" />
                </div>
                <div className='circuitointra__card-desc'>
                    <h2>{circuito?.titulo}</h2>
                    <h4>Dias:</h4>
                    <p>{(circuito?.dias).length}</p>
                    <div>
                        <p>{circuito?.duracion}</p>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default CircuitoIntraCard