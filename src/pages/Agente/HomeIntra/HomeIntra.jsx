import React from 'react'
import logo from './../../../assets/carril/home_intra.png'
import './HomeIntra.css'
const HomeIntra = () => {
  return (
    <div className='container'>
      <h2>Bienvenido a Perú Exploring </h2>
      <div className='homeintra__top'>
        <div className='homeintra__top-img'>
          <img src={logo} alt="" />
        </div>
        <div className='homeintra__top-right'>
          <h4>
            Reservas
          </h4>
          <p>
            Todas las reservas se realizarán por escrito vía correo electrónico, en el caso de que ingrese una reserva de última hora puede solicitarse vía whatsapp formalizando posteriormente la reserva por correo electrónico. En el correo deberá de indicar los siguientes datos:
          </p>
          <br />
          <p>- Número de file o nombre de pasajeros</p>
          <p>- Servicios a tomar</p>
          <p>- Fecha de servicios</p>
          <p>- Número de vuelo</p>
          <p>- Hotel o dirección de lugar</p>
          <p>- Tipo de servicio: Compartido (SIC), Privado (PVT) o Deluxe (DLX)</p>
          <br />
          <h4>NÚMERO DE CONTACTO:</h4>
          <div className='homeintra__top-rightcontacto'>
            <div className='homeintra__top-rightcontactocard'>
              <p> Meliza Castro</p>
              <p> reservas1@peruexploring.pe</p>
              <p>Celular: +51 932513171</p>
            </div>
            <div className='homeintra__top-rightcontactocard'>
              <p>Mayte Dávila</p>
              <p>reservas2@peruexploring.pe</p>
              <p>Celular: +51 974581054</p>
            </div>
          </div>
        </div>

      </div>
      <div className='homeintra__bottom'>

        <h4>¿QUIENES SOMOS?</h4>
        <i>Perú exploring es un operador turístico del Perú.</i>
        <p>
          • Actualmente contamos con 10 años de experiencia, además tenemos servicios únicos que nos diferencian de los otros operadores, asi como también servicios compartidos en un solo idioma y tenemos experiencia en lo que hacemos.
        </p>
        <p>
          • Trabajamos con agencias de viajes mayoristas, buscando ser su aliado y fomentar nuestra cultura peruana, orientándonos a la calidad de nuestros servicios, lo que nos ayuda a crecer como operadores.
        </p>
        <p>
          • También trabajamos con agencias de distintos paises, recibiendo los pasajeros FIT o grupos, representándolos con bastante esfuerzo y compromiso.
        </p>
        <div className='homeintra__bottom-datos'>

          <aside>
            <h5>HORARIO</h5>
            <div className='homeintra__bottom-card'>
              <i className='bx bx-time-five' style={{ fontSize: '50px', alignSelf: 'center', marginRight: '10px' }}></i>
              <div className='homeintra__bottom-text'>
                <b> Lunes a Viernes</b>
                <p>08:30 Hrs - 18:30 Hrs</p>
                <b>Sábados</b>
                <p>08:30 Hrs - 13:00 Hrs</p>
              </div>
            </div>
          </aside>

          <aside>
            <h5> NÚMEROS DE CONTACTO</h5>
            <div className='homeintra__bottom-card'>
              <i className='bx bx-phone-call' style={{ fontSize: '50px', alignSelf: 'center', marginRight: '10px' }}></i>
              <div>
                <p>Teléfono: (01) 7515733</p>
                <p>Reservas: +51 974581054</p>
                <p>Atención 24H: +51 924 696 906</p>
              </div>
            </div>
          </aside>

          <aside>
            <h5> CORREO</h5>
            <div className='homeintra__bottom-card'>
              <i className='bx bx-envelope' style={{ fontSize: '50px', alignSelf: 'center', marginRight: '10px' }}></i>
              <div>
                <p>reservas1@peruexploring.pe</p>
                <p>reservas2@peruexploring.pe</p>

              </div>
            </div>
          </aside>

          <aside>
            <h5> OFICINAS</h5>
            <div className='homeintra__bottom-card'>
              <i className='bx bx-location-plus' style={{ fontSize: '50px', alignSelf: 'center', marginRight: '10px' }}></i>
              <div>
                <p> Calle San Manuel 174, </p>
                <p> Urb. Santa Luisa - Los Olivos (Lima, Perú)</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default HomeIntra