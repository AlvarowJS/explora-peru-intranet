import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import portada from './../../../assets/carril/contacto_intra.png'
import logoExplora from './../../../assets/logo/logo.png'
const URL = 'https://backend.peruexploring.pe/public/api/v1/contactenos'
import './contacto.css'
const ContactoIntra = () => {
  const { handleSubmit, register, reset, watch } = useForm()
  const defaultValuesForm = {
    nombre: '',
    mensaje: '',
    email: '',
    celular: '',
  }
  const submit = data => {
    return MySwal.fire({
      title: '¿Estás seguro de enviar esta informacion?',
      text: "¡No podrás editar esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Enviado!',
          text: 'El mensaje a sido enviado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        axios.post(URL, data)
          .then(res => {
            reset(defaultValuesForm)
          })
          .catch(err => console.log(err))
      }
    })


  }
  return (

    <>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <img className='cover-image' src={portada} alt="" />
        </div>
        <div className='col-md-6 col-sm-12 my-4 p-5'>
          <div className='row'>
            <div className='col-md-10 col-sm-8'></div>
            <div className='col-md-2 col-sm-4'>
              <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <h2>Contáctanos</h2>
            <p>¿Estas interesado en nuestros servicios? Escribenos</p>
            <div className='row'>
              <div className='col-md-2'>
                <label htmlFor="nombre">Nombre: </label>
              </div>
              <div className='col-md-10'>
                <input type="text" className="form-control" id='nombre'
                  {...register('nombre')} required />
              </div>
            </div>

            <div className='row my-4'>
              <div className='col-md-2'>
                <label htmlFor="email">Email: </label>
              </div>
              <div className='col-md-10'>
                <input type="text" className="form-control" id='email'
                  {...register('email')} required />
              </div>
            </div>

            <div className='row my-4'>
              <div className='col-md-2'>
                <label htmlFor="celular">Celular: </label>
              </div>
              <div className='col-md-10'>
                <input type="text" className="form-control" id='celular'
                  {...register('celular')} required />
              </div>
            </div>

            <div className='row my-4'>
              <div className='col-md-2'>
                <label htmlFor="mensaje">Mensaje: </label>
              </div>
              <div className='col-md-10'>
                <textarea className="form-control" id='mensaje' rows={6} {...register('mensaje')} required />

              </div>
            </div>
            <div className='row my-4 mx-5'>
              <button className='btn' style={{ color: 'white', backgroundColor: '#DC8A4A', borderRadius: 15 }}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default ContactoIntra