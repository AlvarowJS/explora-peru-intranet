import React, { useEffect, useState } from 'react'
import './../style.css'
import PromoIntraCard from './PromoIntraCard'
import promosBD from '../../../apis/promos'
import lugaresBD from '../../../apis/lugares'
import logoExplora from './../../../assets/logo/logo.png'
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
      <div className='d-flex justify-content-between align-items-center' >
        <div className='mt-5' style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
          </div>
          <h3 style={{ color: '#DC8A4A' }}>Nuestras promociones </h3>
        </div>
        <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', marginTop: 10 }} />
      </div>
      <div className='row my-4'>
        {

          promos?.map(promo => (
            <>
              <PromoIntraCard
                key={promo.id}
                promo={promo}
              />
            </>
          ))

        }
      </div>

    </div>
  )
}

export default PromoIntra