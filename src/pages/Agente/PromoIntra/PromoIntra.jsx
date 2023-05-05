import React, { useEffect, useState } from 'react'
import './../style.css'
import PromoIntraCard from './PromoIntraCard'
import promosBD from '../../../apis/promos'
import lugaresBD from '../../../apis/lugares'
const PromoIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [promos, setPromos] = useState()
  const [lugars, setLugars] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    promosBD.get()
      .then(res => setPromos(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (promos) {
      setFilter(promos?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (promos) {
      setFilter(promos?.filter(e => e.titulo.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
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
      <h2 style={{ color: '#5B2491' }}>Revisa nuestro itinerario de Tours con Promociones! </h2>
      {
        filter ?
          filter?.map(promo => (
            <PromoIntraCard
              key={promo.id}
              promo={promo}
            />
          ))
          :
          promos?.map(promo => (
            <PromoIntraCard
              key={promo.id}
              promo={promo}
            />
          ))
      }
    </div>
  )
}

export default PromoIntra