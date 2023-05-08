import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './NoticiaInfo.css'
import noticiasBD from '../../../apis/noticias';
const NoticiaIntraCardInfo = () => {
    const id = useParams();
    const [noticia, setNoticia] = useState()
    const [noticiaImg, setNoticiaImg] = useState()
    useEffect(() => {
        noticiasBD.get(`/${id.id}`)
            .then(res => {
                setNoticia(res.data)
                setNoticiaImg(`https://auxbackend.peruexploring.pe/storage/noticias/${res?.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container'>
            <Link to='/noticia-intranet'>
                <i className='bx bx-left-arrow-alt mt-4'></i>   Regresar
            </Link>
            <h2>{noticia?.titulo}</h2>

            <div className='noticiainfo'>
                <img src={noticiaImg} alt="" />
                <div className='noticiainfo__info'>
                    <h4>{noticia?.titulo}</h4>
                    <p>{noticia?.nota} </p>
                </div>
            </div>
        </div>
    )
}

export default NoticiaIntraCardInfo