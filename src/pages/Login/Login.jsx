import React, { useState } from 'react'
import portada from './../../assets/carril/about_1.png'
import logo from './../../assets/logo/logo.png'
import { useForm } from 'react-hook-form'
const URL = 'https://backend.peruexploring.pe/api/login'

import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const [validate, setValidate] = useState(false)
    const { handleSubmit, register, reset, watch } = useForm()
    const submit = data => {
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id_user', res.data.id_user)
                localStorage.setItem('ruc', res.data.ruc)
                localStorage.setItem('razon_social', res.data.razon_social)
                localStorage.setItem('role', res.data.role.id)
                localStorage.setItem('role_name', res.data.role.name)
                navigate('/home-intranet')
            })
            .catch(err => {
                localStorage.setItem('token', '')
                localStorage.setItem('id_user', '')
                localStorage.setItem('ruc', '')
                localStorage.setItem('razon_social', '')
                localStorage.setItem('role', '')
                localStorage.setItem('role_name', '')
                console.log(err)
                setValidate(true)
            })
    }
    return (
        <>

            <div className="login-container">
                <div className="login-left">
                    <img src={portada} alt="Imagen de login" />
                </div>
                <div className="login-right">
       
                    <h2>
                        <b> Intranet</b>
                    </h2>
                    <p>Solo para agentes asociados a Perú Exploring</p>
                    <form onSubmit={handleSubmit(submit)}>
                        <label for="ruc">Usuario/Ruc:</label>
                        <input type="text" id="ruc" name="ruc"
                            {...register('ruc')} />
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password"
                            {...register('password')} />

                        <button type="submit">Iniciar sesión</button>
                        {
                            validate == false ? null :
                                <p style={{ color: 'red' }}>Credenciales Incorrectas</p>

                        }

                    </form>
                    <p className='login-right-create'>Quieres ser un Agente?<span> <Link to='/register'>Rellene este formulario de Inscripción</Link></span></p>
                </div>
            </div>


        </>
    )
}

export default Login