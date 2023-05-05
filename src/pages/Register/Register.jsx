import React from 'react'
import portada from './../../assets/carril/about_1.png'

import './Register.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
const MySwal = withReactContent(Swal)
const URL = 'https://backend.peruexploring.pe/api/register'
const Register = () => {


    const submit = data => {
        return MySwal.fire({
            title: '¿Estás seguro de sus datos?',
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
                axios.post(URL, data)
                    .then(res => {
                        console.log(res?.data)
                        // reset(defaultForm)
                        
                        MySwal.fire({
                            icon: 'success',
                            title: 'Mensaje Enviado!',
                            text: 'Activaremos su cuenta pronto :)',
                            customClass: {
                                confirmButton: 'btn btn-success'
                            }
                        })

                    })
                    .catch(err => {
                        console.log(err)
                        MySwal.fire({
                            icon: 'error',
                            title: 'Ocurrio un error',
                            text: 'talvez el correo o ruc ya se ha registrado',
                            customClass: {
                                confirmButton: 'btn btn-success'
                            }
                        })
                    })

            }
        })
    }

    const { handleSubmit, register, reset, watch } = useForm()

    return (
        <>
            <div className="register-container">
                <div className="register-left">
                    <img src={portada} alt="Imagen de register" />
                </div>
                <div className="register-right">
                    <h2>
                        <b> Registro</b>
                    </h2>
                    <p>Se uno de nuestros agentes y accede a precios especiales</p>
                    <form onSubmit={handleSubmit(submit)}>

                        <label htmlFor="razon_social">Razón Social:</label>
                        <input type="text" id="razon_social" name="razon_social"
                            {...register('razon_social')} />


                        <div className="input-group">
                            <div>
                                <label htmlFor="telefono">Telefono o celular:</label>
                                <input type="text" id="telefono" name="telefono"
                                    {...register('telefono')} />
                            </div>
                            <div>
                                <label htmlFor="ruc">RUC</label>
                                <input type="text" id="ruc" name="ruc"
                                    {...register('ruc')} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label htmlFor="direccion">Dirección:</label>
                                <input type="text" id="direccion" name="direccion"
                                    {...register('direccion')} />
                            </div>
                            <div>
                                <label htmlFor="email">Correo Electronico</label>
                                <input type="email" id="email" name="email"
                                    {...register('email')}
                                />
                            </div>
                        </div>
                        <div className='input-check'>
                            <input type="checkbox" />
                            <p> Acepto los terminos y condiciones del servicio</p>
                        </div>

                        <button type="submit">Registrar</button>
                    </form>
                    <p className='register-right-create'>Eres parte de Perú de Exploring? <span><Link to='/login' > Inicia Sesión</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default Register