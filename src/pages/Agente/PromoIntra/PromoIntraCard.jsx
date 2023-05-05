import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Promo.css'
const PromoIntraCard = ({ promo }) => {
    const navigate = useNavigate()
    let img = promo.img
    img = `https://backend.peruexploring.pe/storage/promos/${promo.titulo}/${img}`
    const verTour = (id) => {
        navigate(`/promo-intranet/${id}`)
    }
    return (
        <>
            <div className='promointra__card' onClick={() => verTour(promo.id)}>
                <div className='promointra__card-img'>
                    <img src={img} alt="" />
                </div>
                <div className='promointra__card-desc'>
                    <h2>{promo.titulo}</h2>
                    <p>{(promo.descripcion_spanish).substring(0, 100) + "..."}</p>
                    <div>
                        <p>{promo.duracion} Horas</p>

                    </div>
                </div>
               
            </div>
        </>
    )
}

export default PromoIntraCard