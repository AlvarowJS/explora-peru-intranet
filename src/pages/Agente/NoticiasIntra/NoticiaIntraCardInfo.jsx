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
                setNoticiaImg(`https://backend.peruexploring.pe/public/storage/noticias/${res?.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container'>
            <Link to='/noticia-intranet'>
                <i className='bx bxs-chevron-left-circle' style={{ fontSize: 40, marginTop: 20 }}></i>
            </Link>

            <div className='mt-5' style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ backgroundColor: '#DC8A4A', width: '60px', height: '20px' }}>
                </div>
                <h3 style={{ color: '#DC8A4A' }}>Noticias</h3>
            </div>
            <h2 style={{ color: '#DC8A4A', marginLeft: 40 }}>{noticia?.titulo}</h2>
            <div className='row'>
                <div className='col-10'>

                </div>
                <div className='col-2'>
                    {new Date(noticia?.created_at).toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                    })}
                </div>
            </div>
            <div className='row'>
                <div>
                    <img src={noticiaImg} alt="" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
            </div>
            <div className='border rounded my-4 mx-md-5 p-4' style={{}}>                
                    <p>{noticia?.nota} </p>            
            </div>            
        </div>
    )
}

export default NoticiaIntraCardInfo