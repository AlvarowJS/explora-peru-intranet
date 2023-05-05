import React, { useEffect, useState } from 'react'
import './../style.css'
import './TourFiltros.css'
import TourIntraCard from './TourIntraCard'
import toursBD from '../../../apis/tours'
import lugaresBD from '../../../apis/lugares'
const TourIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [tours, setTours] = useState()
  const [lugars, setLugars] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()

  useEffect(() => {
    toursBD.get()
      .then(res => setTours(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo?.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo?.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
    }
  }, [filterSelect])


  useEffect(() => {
    lugaresBD.get()
      .then(res => setLugars(res?.data))
      .catch(err => console.log(err))
  }, [])

  const handleSelectChange = () => {
    setFilterSelect(event.target.value);
  }
  const buscarTour = () => {
    setSearch(event.target.value)
  }

  return (
    <div className='container'>
      <div className='tours__filters'>
        <div className='tours__filters--buscador'>
          <input type="text" onChange={() => buscarTour()} /><i className='bx bx-search-alt-2'></i>
        </div>
        <div className='tours__filters--select'>
          <span>Buscar información en </span>
          <select onChange={handleSelectChange}>
            {
              lugars && lugars.map(lugar => (
                <option value={lugar?.nombre}>{lugar?.nombre}</option>
              ))
            }
          </select>
        </div>
      </div>
      <h2>Revisa nuestro itinerario de Tours </h2>
      {
        filter ?
          filter?.map(tour => (
            <TourIntraCard
              key={tour.id}
              tour={tour}
            />
          ))
          :
          tours?.map(tour => (
            <TourIntraCard
              key={tour.id}
              tour={tour}
            />
          ))
      }
    </div>
  )
}

export default TourIntra