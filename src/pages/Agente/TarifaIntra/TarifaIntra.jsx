import React, { useState } from 'react'
import './../style.css'
import './TarifaIntra.css'
import axios from 'axios'
const URL = 'https://backend.peruexploring.pe/api/v1/tarifa-user'
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
                window.open(`https://backend.peruexploring.pe/storage/tarifario/${tarifa}`, '_blank')
            })
            .catch(err => console.log(err))
    };


    return (
        <div className='container'>
            <h2>Tarifario</h2>
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
            <b>Cuenta corriente Banco de Crédito del Perú:</b>
            <p> • Cuenta en soles: 191-9464139-0-61</p>
            <p>CCI: 00219100946413906255</p>
            <p>Cuenta en dólares americanos: 191-939890-1-99</p>
            <p>CCI: 00219100939898019953</p>
            <p>Código SWIFT: BCPLPEPL Dirección: Calle Las Camelias 750, San Isidro, Lima 27, Perú.</p>
            <b>Banco de la Nación:</b>
            <p>• Cuenta de detracciones: 00-054-130570</p>
            <p>A nombre de la empresa: PERU EXPLORING OPERADORES TURISTICOS E.I.R.L.</p>
            <div className='tarifas'>
                <div>
                    <button
                        className='btn btn-success'
                        style={{ backgroundColor: '#5B2491', borderColor: '#5B2491' }}
                        onClick={handleDescargarReserva}
                    >
                        <i className='bx bxs-download' ></i>
                    </button>
                    <span> Descargar Políticas de Reserva</span>
                </div>
                <div>
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
    )
}

export default TarifaIntra