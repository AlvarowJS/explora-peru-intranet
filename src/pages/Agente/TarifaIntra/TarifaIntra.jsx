import React, { useState } from 'react'
import './../style.css'
import './TarifaIntra.css'
import axios from 'axios'
import logoExplora from './../../../assets/logo/logo.png'
const URL = 'https://backend.peruexploring.pe/public/api/v1/tarifa-user'
const TarifaIntra = () => {
    const [tarifas, setTarifas] = useState()
    const handleDescargarReserva = () => {
        window.open('./Tarifa/Politicas_de_Reserva.pdf', '_blank');
    };
    const handleDescargarTarifa = () => {
        let idUser = localStorage.getItem('id_user')
        axios.get(`${URL}/${idUser}`)
            .then(res => {
                setTarifas(res.data)
                let tarifa = res.data[0].archivo
                window.open(`https://backend.peruexploring.pe/public/storage/tarifario/${tarifa}`, '_blank')
            })
            .catch(err => console.log(err))
    };


    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-10 col-sm-8'></div>
                <div className='col-md-2 col-sm-4'>
                    <img src={logoExplora} alt="" style={{ width: '100px', height: '50px', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
            </div>
            <div className='mt-5' style={{ display: 'flex', gap: 10 }}>
                <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
                </div>
                <h4 style={{ color: '#DC8A4A' }}>
                    Tarifario de Perú Exploring
                </h4>
            </div>
            <div style={{ marginLeft: 30 }}>
                <p>
                    Las tarifas están expresadas en dólares americanos,
                    las tarifas son netas, no comisionables. Estas tarifas no
                    rigen para fechas festivas (Año nuevo, noche buena, semana santa,
                    fiestas patrias y feriados calendario), a estas fechas se debe de
                    adicionar el 50% para algunos servicios, se debe de consultar en
                    el momento de hacer la reserva. Estas tarifas pueden variar, si se presenta
                    algún cambio drástico en la economía del Perú o por alzas inesperada por
                    parte del gobierno u operadas que afectan nuestras tarifas se estará adicionando
                    el importe que corresponde. La agencia tiene que hacer el depósito por los servicios
                    al menos 5 días antes del mismo:
                </p>
            </div>
            <div className='mt-5' style={{ display: 'flex', gap: 10 }}>
                <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
                </div>
                <h4 style={{ color: '#DC8A4A' }}>
                    Cuenta corriente Banco de Crédito del Perú:
                </h4>
            </div>
            <div className='row mx-2'>

                <div className='col-md-6 col-sm-12 p-4' style={{ backgroundColor: '#EEEDD9', borderRadius: 20 }}>
                    <p>
                        • Cuenta en soles: 191-9464139-0-61
                        • CCI: 00219100946413906255 <br />
                        • Cuenta en dólares americanos: 191-939890-1-99 <br />
                        • CCI: 00219100939898019953 <br />
                        • Código SWIFT: BCPLPEPL <br />
                        • Dirección: Calle Las Camelias 750, San Isidro, Lima 27, Perú. <br />
                    </p>
                </div>
                <div className='col-md-6 col-sm-12'>

                </div>
            </div>
            <div className='mt-5' style={{ display: 'flex', gap: 10 }}>
                <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
                </div>
                <h4 style={{ color: '#DC8A4A' }}>
                    Banco de la Nación:
                </h4>
            </div>
            <div className='row mx-2'>
                <div className='col-md-8 col-sm-12 p-4' style={{ backgroundColor: '#EEEDD9', borderRadius: 20 }}>
                    <p>
                        • Cuenta de detracciones: 00-054-130570 <br />
                        A nombre de la empresa: PERU EXPLORING OPERADORES TURISTICOS E.I.R.L.
                    </p>
                </div>
                <div className='col-md-4 col-sm-12'>

                </div>

            </div>
            <div className='row my-4'>
                <div className='col-md-6 col-sm-12'>

                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='row'>
                        <div className='col'>
                            <button
                                className='btn btn-success'
                                style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                                onClick={handleDescargarReserva}
                            >
                                <i className='bx bxs-download' ></i>
                            </button>
                            <span> Descargar Políticas de Reserva</span>
                        </div>
                        <div className='col'>
                            <button
                                className='btn btn-success'
                                style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                                onClick={handleDescargarTarifa}
                            >
                                <i className='bx bxs-download' ></i>
                            </button>
                            <span> Descargar Tarifario</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TarifaIntra