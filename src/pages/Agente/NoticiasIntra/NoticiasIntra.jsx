import React, { useEffect, useState } from 'react'
import './../style.css'
import logoExplora from './../../../assets/logo/logo.png'
import ReactPaginate from 'react-paginate'

// import noticiasBD from '../../../apis/noticias'
// import NoticiaCard from '../../../../Components/Noticia/NoticiaCard'
import NoticiasIntraCard from './NoticiasIntraCard'
import noticiasBD from '../../../apis/noticias'

const NoticiasIntra = () => {
  const [noticias, setNoticias] = useState()
  const [pageNumber, setPageNumber] = useState(0)
  const noticiasPerPage = 5

  useEffect(() => {
    noticiasBD.get()
      .then(res => setNoticias(res.data))
      .catch(err => console.log(err))
  }, [])

  const pagesVisited = pageNumber * noticiasPerPage
  const displayNoticias = noticias
    ?.slice(pagesVisited, pagesVisited + noticiasPerPage)
    .map(noticia => (
      <NoticiasIntraCard
        key={noticia.id}
        noticia={noticia}
      />
    ))

  const pageCount = Math.ceil(noticias?.length / noticiasPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center mx-4' >
        <div className='mt-5' style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
          </div>
          <h3 style={{ color: '#DC8A4A' }}>Noticias </h3>
        </div>
        <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', marginTop: 10 }} />
      </div>
      {displayNoticias}

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination"
        previousLinkClassName={"previousPage"}
        nextLinkClassName={"nextPage"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default NoticiasIntra