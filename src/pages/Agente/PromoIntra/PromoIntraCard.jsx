import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Promo.css'
import logoExplora from './../../../assets/logo/logo.png'
const PromoIntraCard = ({ promo }) => {
    const navigate = useNavigate()
    let img = promo.img
    img = `https://backend.peruexploring.pe/public/storage/promos/${promo.titulo}/${img}`
    const verTour = (id) => {
        navigate(`/promo-intranet/${id}`)
    }
    const descargarItinerarioEnglish = () => {
        window.open(`https://backend.peruexploring.pe/public/storage/promos/${promo.titulo}/${promo.archivo_english}`, '_blank')
    }
    return (
        <>
            <div className='col-md-4 my-2'>
                <img src={img} alt="" style={{ width: '100%', height: '700px', objectFit: 'cover', borderRadius: '10px' }} />

                <div style={{textAlign: 'center', marginTop: 20, marginBottom:20}}>
                    <button
                        className='btn btn-success'
                        style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                        onClick={descargarItinerarioEnglish}
                    >
                        <i className='bx bxs-download' ></i>
                    </button>
                    Descargar Itinerario
                </div>
            </div>


        </>
    )
}

export default PromoIntraCard