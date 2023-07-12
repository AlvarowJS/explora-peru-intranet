import React from 'react'
import logo from './../../../assets/carril/home_intra.png'
import './HomeIntra.css'
const HomeIntra = () => {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src={logo} alt="" style={{ width: '100%' }} />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='mt-5' style={{ display: 'flex', gap: 10 }}>
            <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
            </div>
            <h4 style={{ color: '#DC8A4A' }}>
              Bienvenidos a Perú Exploring
            </h4>
          </div>
          <p>
            Todas las reservas se realizarán por escrito vía correo electrónico, en el caso de que ingrese una reserva de última hora puede solicitarse vía whatsapp formalizando posteriormente la reserva por correo electrónico. En el correo deberá de indicar los siguientes datos:
          </p>
          <br />
          <p> . Número de file o nombre de pasajeros <br />
            . Servicios a tomar<br />
            . Fecha de servicios<br />
            . Número de vuelo<br />
            . Hotel o dirección de lugar<br />
            . Tipo de servicio: Compartido (SIC), Privado (PVT) o Deluxe (DLX)</p>
          <br />
        </div>

        <div className='row justify-content-around gap-4'>
          <div className='col p-4' style={{ backgroundColor: '#F2EFE0', borderRadius: 20 }}>
            <div className='d-flex align-items-center'>
              <div className=''>
                <i className='bx bx-user-circle' style={{ fontSize: 100 }}></i>
              </div>
              <div className=''>
                <p> Meliza Castro <br />
                  reservas1@peruexploring.pe<br />
                  Celular: +51 932513171</p>
              </div>
            </div>
          </div>

          <div className='col p-4' style={{ backgroundColor: '#F2EFE0', borderRadius: 20 }}>
            <div className='d-flex align-items-center'>
              <div className=''>
                <i className='bx bx-user-circle' style={{ fontSize: 100 }}></i>
              </div>
              <div className=''>
                <p>Mayte Dávila<br />
                  reservas2@peruexploring.pe<br />
                  Celular: +51 974581054</p>
              </div>
            </div>

          </div>
        </div>

        <div className='mt-5' style={{ display: 'flex', gap: 10 }}>
          <div style={{ backgroundColor: '#DC8A4A', width: '20px', height: '20px' }}>
          </div>
          <h4 style={{ color: '#DC8A4A' }}>
            ¿QUIENES SOMOS?
          </h4>
        </div>

        <p style={{ color: '#DC8A4A' }}>Perú exploring es un operador turístico del Perú.</p>
        <p>
          • Actualmente contamos con 10 años de experiencia, además tenemos servicios únicos que nos diferencian de los otros operadores, asi como también servicios compartidos en un solo idioma y tenemos experiencia en lo que hacemos.
        </p>
        <p>
          • Trabajamos con agencias de viajes mayoristas, buscando ser su aliado y fomentar nuestra cultura peruana, orientándonos a la calidad de nuestros servicios, lo que nos ayuda a crecer como operadores.
        </p>
        <p>
          • También trabajamos con agencias de distintos paises, recibiendo los pasajeros FIT o grupos, representándolos con bastante esfuerzo y compromiso.
        </p>

        <div className='row justify-content-around gap-4'>
          <div className='col p-4' style={{ backgroundColor: '#28264E', color: 'white', borderRadius: 20 }}>
            <div className='d-flex align-items-center'>
              <div className=''>
                <i className='bx bx-time-five' style={{ fontSize: 100 }}></i>
              </div>
              <div className=''>
                <p>Lunes a Viernes: 8:00 a.m - 6:00 p.m <br />
                  Sábado: 8:00 a.m - 1:00 p.m</p>

              </div>
            </div>
          </div>

          <div className='col p-4' style={{ backgroundColor: '#28264E', color: 'white', borderRadius: 20 }}>
            <div className='d-flex align-items-center'>
              <div className=''>
                <i className='bx bx-been-here' style={{ fontSize: 100 }} ></i>
              </div>
              <div className=''>
                <p>Calle San Manuel 174, Urb. Santa<br />
                  Luisa - Los Olivos (Lima, Perú)</p>
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default HomeIntra