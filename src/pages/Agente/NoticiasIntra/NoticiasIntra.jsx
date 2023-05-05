import React, { useEffect, useState } from 'react'
import './../style.css'

// import noticiasBD from '../../../apis/noticias'
// import NoticiaCard from '../../../../Components/Noticia/NoticiaCard'
import NoticiasIntraCard from './NoticiasIntraCard'
import noticiasBD from '../../../apis/noticias'

const NoticiasIntra = () => {
  const [noticias, setNoticias] = useState()
  useEffect(() => {
    noticiasBD.get()
      .then(res => setNoticias(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='container'>
      <h2>Noticias</h2>
      {noticias?.map(noticia => (
        <NoticiasIntraCard
          key={noticia.id}
          noticia={noticia}
        />
      ))}
    </div>
  )
}

export default NoticiasIntra