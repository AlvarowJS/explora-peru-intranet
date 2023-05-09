import React, { useEffect, useState } from 'react'
import './../style.css'

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
      <h2>Noticias</h2>
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