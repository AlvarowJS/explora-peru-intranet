import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Noticia.css'
const NoticiasIntraCard = ({ noticia }) => {
    const navigate = useNavigate()
    let img = noticia.img
    img = `https://backend.peruexploring.pe/public/storage/noticias/${noticia?.titulo}/${img}`
    const vernoticia = (id) => {
        navigate(`/noticia-intranet/${id}`)
    }
    return (
        <>
            <div className='row align-items-center mx-2 my-4' >
                <div className='col-md-3 col-sm-12'>
                    <img src={img} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                </div>

                <div className='col-md-6 col-sm-6'>
                    <h2 style={{ color: '#DC8A4A' }}>{noticia.titulo}</h2>
                    <p>{(noticia?.nota).substring(0, 100) + "..."}</p>                    
                </div>
                <div className='col-md-3 col-sm-6'>
                    <button className='btn' style={{ backgroundColor: '#DC8A4A', color: 'white', borderRadius: '20px' }} onClick={() => vernoticia(noticia.id)}>Más Información</button>
                </div>

            </div>
        </>
    )
}

export default NoticiasIntraCard