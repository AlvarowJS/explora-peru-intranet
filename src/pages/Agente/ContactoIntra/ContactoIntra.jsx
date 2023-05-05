import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const URL = 'https://backend.peruexploring.pe/api/v1/contactenos'
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

    <div className='container'>
      <h2>Contáctanos</h2>
      <p>¿Estas interesado en nuestros servicios? Escribenos</p>
      <form onSubmit={handleSubmit(submit)} className='reclamacion'>
        <div className="row">
          <div className="col-4">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" className="form-control" id='nombre'
              {...register('nombre')} required />
          </div>


        </div>
        <div className="row">
          <div className="col-8">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id='email'
              {...register('email')} required />
          </div>
          <div className="col-4">
            <label htmlFor="celular">Celular:</label>
            <input type="text" className="form-control"
              {...register('celular')} />
          </div>

        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea type="text" className="form-control" id='mensaje'
              {...register('mensaje')} required >
            </textarea>
          </div>
        </div>
        <button className='btn btn-primary my-4' style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}>Enviar</button>
      </form>



    </div>
  )
}

export default ContactoIntra