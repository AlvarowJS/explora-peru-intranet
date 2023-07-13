import React, { useEffect, useState } from 'react'
import './../style.css'
import './TourFiltros.css'
import TourIntraCard from './TourIntraCard'
import toursBD from '../../../apis/tours'
import lugaresBD from '../../../apis/lugares'
import logoExplora from './../../../assets/logo/logo.png'
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
      <div className='d-flex justify-content-between align-items-center' >
        <div className='mt-5' style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
          </div>
          <h3 style={{ color: '#DC8A4A' }}>Revisa nuestro itinerario de Tours </h3>
        </div>
        <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', marginTop: 10 }} />
      </div>
      <div className="row">
        <div className='col-md-6 col-sm-4'>

        </div>
        <div className='col-md-6 col-sm-8'>
          <div className='tours__filters--buscador'>
            <input placeholder='Buscar por título de tour' type="text" onChange={() => buscarTour()} /><i className='bx bx-search-alt-2'></i>
          </div>
        </div>
      </div>
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
    </div >
  )
}

export default TourIntra