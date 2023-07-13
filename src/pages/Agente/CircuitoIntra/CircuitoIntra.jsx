import React, { useEffect, useState } from 'react'
import './../style.css'
import './CurcuitoFiltros.css'
import CircuitoIntraCard from './CircuitoIntraCard'
import circuitosBD from '../../../apis/circuitos'
import lugaresBD from '../../../apis/lugares'
import logoExplora from './../../../assets/logo/logo.png'
const CircuitoIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [circuitos, setCircuitos] = useState()
  const [lugars, setLugars] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    circuitosBD.get()
      .then(res => setCircuitos(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (circuitos) {
      setFilter(circuitos?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (circuitos) {
      setFilter(circuitos?.filter(e => e.titulo.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
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
  const buscarCircuito = () => {
    setSearch(event.target.value)
  }
  useEffect(() => {
    circuitosBD.get()
      .then(res => setCircuitos(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center' >
        <div className='mt-5' style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
          </div>
          <h3 style={{ color: '#DC8A4A' }}>Revisa nuestro itinerario de Circuitos </h3>
        </div>
        <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', marginTop: 10 }} />
      </div>
      <div className="row">
        <div className='col-md-6 col-sm-4'>

        </div>
        <div className='col-md-6 col-sm-8'>
          <div className='tours__filters--buscador'>
            <input placeholder='Buscar por título de circuito' type="text" onChange={() => buscarCircuito()} /><i className='bx bx-search-alt-2'></i>
          </div>
        </div>
      </div>
      {
        filter ?
          filter?.map(circuito => (
            <CircuitoIntraCard
              key={circuito.id}
              circuito={circuito}
            />
          ))
          :
          circuitos?.map(circuito => (
            <CircuitoIntraCard
              key={circuito.id}
              circuito={circuito}
            />
          ))
      }
    </div>
  )
}

export default CircuitoIntra
