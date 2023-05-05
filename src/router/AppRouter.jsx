import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import Login from './../pages/Login/Login'
import Register from './../pages/Register/Register'
import Menu from './../pages/Components/Menu'

// Agente
import HomeIntra from './../pages/Agente/HomeIntra/HomeIntra'
import TourIntra from './../pages/Agente/TourIntra/TourIntra'
import CircuitoIntra from './../pages/Agente/CircuitoIntra/CircuitoIntra'
import NoticiasIntra from './../pages/Agente/NoticiasIntra/NoticiasIntra'
import ContactoIntra from './../pages/Agente/ContactoIntra/ContactoIntra'

// Admins
import UsuariosAdmin from './../pages/Admin/UsuariosAdmin/UsuariosAdmin'
import TourAdmin from './../pages/Admin/TourAdmin/TourAdmin'
import CircuitoAdmin from './../pages/Admin/CircuitoAdmin/CircuitoAdmin'
import NoticiaAdmin from './../pages/Admin/NoticiaAdmin/NoticiaAdmin'
import ReclamacionAdmin from './../pages/Admin/ReclamacionAdmin/ReclamacionAdmin'
import ComunicacionAdmin from './../pages/Admin/ComunicacionAdmin/ComunicacionAdmin'
// import Reclamaciones from '../Pages/Reclamaciones/Reclamaciones'
import TourIntraCardInfo from './../pages/Agente/TourIntra/TourIntraCardInfo'
import ProtectedRouter from './ProtectedRouter'
import NoticiaIntraCardInfo from './../pages/Agente/NoticiasIntra/NoticiaIntraCardInfo'
import TarifasAdmin from './../pages/Admin/TarifasAdmin/TarifasAdmin'
import TarifaIntra from './../pages/Agente/TarifaIntra/TarifaIntra'
import PromoIntra from './../pages/Agente/PromoIntra/PromoIntra'
import PromoIntraCardInfo from './../pages/Agente/PromoIntra/PromoIntraCardInfo'
import CircuitoIntraCardInfo from './../pages/Agente/CircuitoIntra/CircuitoIntraCardInfo'
// import CircuitosInfo from '../Pages/Circuitos/CircuitosInfo/CircuitosInfo'
import PromocionAdmin from './../pages/Admin/PromocionAdmin/PromocionAdmin'
import './whatsapp.css'


const AppRouter = () => {

    const token = localStorage.getItem("token")

    function NavbarRoutes() {
        const location = useLocation();

        if (
            location.pathname === '/' ||
            location.pathname === '/login' ||
            location.pathname === '/register'

        ) {
            return (
                <>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </>
            );
        }
        else if (
            location.pathname === '/admin/usuarios' ||
            location.pathname === '/admin/tour' ||
            location.pathname === '/admin/circuitos' ||
            location.pathname === '/admin/promocion' ||
            location.pathname === '/admin/noticias' ||
            location.pathname === '/admin/reclamacion' ||
            location.pathname === '/admin/mensajes' ||
            location.pathname === '/admin/tarifas' ||
            location.pathname === '/home-intranet' ||
            location.pathname === '/tour-intranet' ||
            location.pathname.match(/^\/tour-intranet\/(.+)/) ||
            location.pathname === '/circuito-intranet' ||
            location.pathname.match(/^\/circuito-intranet\/(.+)/) ||
            location.pathname === '/noticia-intranet' ||
            location.pathname.match(/^\/noticia-intranet\/(.+)/) ||
            location.pathname === '/mice-intranet' ||
            location.pathname === '/contacto-intranet' ||
            location.pathname === '/tarifa-intranet' ||
            location.pathname === '/promo-intranet' ||
            location.pathname.match(/^\/promo-intranet\/(.+)/)
        ) {
            return (
                <>
                    <Menu />
                    <Routes>
                        {/* <Route path='/home' element={<Menu />} /> */}
                        {/* ADMIN */}
                        <Route element={<ProtectedRouter />}>
                            <Route path='/admin/usuarios' element={<UsuariosAdmin />} />
                            <Route path='/admin/tour' element={<TourAdmin />} />
                            <Route path='/admin/circuitos' element={<CircuitoAdmin />} />
                            <Route path='/admin/noticias' element={<NoticiaAdmin />} />
                            <Route path='/admin/reclamacion' element={<ReclamacionAdmin />} />
                            <Route path='/admin/mensajes' element={<ComunicacionAdmin />} />
                            <Route path='/admin/tarifas' element={<TarifasAdmin />} />
                            <Route path='/admin/promocion' element={<PromocionAdmin />} />


                            {/* AGENTE */}
                            <Route path='/home-intranet' element={<HomeIntra />} />
                            <Route path='/tour-intranet' element={<TourIntra />} />
                            <Route path='/tour-intranet/:id' element={<TourIntraCardInfo />} />
                            <Route path='/circuito-intranet' element={<CircuitoIntra />} />
                            <Route path='/circuito-intranet/:id' element={<CircuitoIntraCardInfo />} />
                            <Route path='/promo-intranet' element={<PromoIntra />} />
                            <Route path='/promo-intranet/:id' element={<PromoIntraCardInfo />} />
                            <Route path='/noticia-intranet/:id' element={<NoticiaIntraCardInfo />} />
                            <Route path='/noticia-intranet' element={<NoticiasIntra />} />
                            <Route path='/mice-intranet' element={<NoticiasIntra />} />
                            <Route path='/tarifa-intranet' element={<TarifaIntra />} />
                            <Route path='/contacto-intranet' element={<ContactoIntra />} />
                        </Route>
                    </Routes>
                </>
            )
        }
    }


    return (
        <>
            <BrowserRouter>
                <NavbarRoutes />
                <a href="https://wa.link/zu5485" className="btn-whatsapp" target="_blank">
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </BrowserRouter>
        </>
    )
}

export default AppRouter