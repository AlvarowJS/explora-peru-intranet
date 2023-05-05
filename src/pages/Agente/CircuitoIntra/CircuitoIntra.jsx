import React, { useEffect, useState } from 'react'
import './../style.css'
import './CurcuitoFiltros.css'
import CircuitoIntraCard from './CircuitoIntraCard'
import circuitosBD from '../../../apis/circuitos'
import lugaresBD from '../../../apis/lugares'
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
      <div className='circuitos__filters'>
        <div className='circuitos__filters--buscador'>
          <input type="text" onChange={() => buscarCircuito()} /><i className='bx bx-search-alt-2'></i>
        </div>
        <div className='circuitos__filters--select'>
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
      <h2 style={{ color: '#5B2491' }}>Revisa nuestro itinerario de Circuitos </h2>
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
