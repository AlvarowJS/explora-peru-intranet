import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './PromoIntra.css'
import promosBD from '../../../apis/promos';
const PromoIntraCardInfo = () => {

    const id = useParams();
    const [promo, setPromo] = useState()
    const [promoImg, setPromoImg] = useState()
    useEffect(() => {
        promosBD.get(`/${id.id}`)
            .then(res => {
                setPromo(res.data)
                setPromoImg(`https://auxbackend.peruexploring.pe/storage/promos/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    const descargarItinerarioEspaniol = () => {
        
        window.open(`https://auxbackend.peruexploring.pe/storage/promos/${promo.titulo}/${promo.archivo_spanish}`,'_blank')        
    }
    const descargarItinerarioEnglish = () => {
        window.open(`https://auxbackend.peruexploring.pe/storage/promos/${promo.titulo}/${promo.archivo_english}`,'_blank')
    }
    return (
        <div className='container'>
            <Link to='/promo-intranet'>
                <i className='bx bx-left-arrow-alt mt-4'></i>   Regresar
            </Link>
            <h2>{promo?.titulo}</h2>

            <div className='promoinfo'>
                <img src={promoImg} alt="" />
                <div className='promoinfo__info'>
                    <h4>{promo?.titulo}</h4>
                    <p>{promo?.descripcion_spanish} </p>
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

export default PromoIntraCardInfo