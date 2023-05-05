import React, { useEffect, useState } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState({})
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let token = localStorage.getItem('token');
        let ruc = localStorage.getItem('ruc');
        let role = localStorage.getItem('role');
        let razon_social = localStorage.getItem('razon_social');
        let role_name = localStorage.getItem('role_name');
        setRole({ token, ruc, role, role_name, razon_social })
    }, [])
    const logout = () => {
        //    return navigate('/login')
        localStorage.setItem('token', '')
        localStorage.setItem('id_user', '')
        localStorage.setItem('ruc', '')
        localStorage.setItem('role', '')
        localStorage.setItem('role_name', '')
        localStorage.setItem('razon_social', '')

    }

    return (
        <>
            <div className="d-md-none">

                <button onClick={handleToggle}
                    style={{ color: "#5b2491", border: "none", padding: "7px", borderRadius: "8px" }}
                >
                    <i className='bx bx-menu' style={{ color: "#5b2491", fontWeight: "bold", fontSize: "30px" }}></i>
                </button>
            </div>

            <div className="d-none d-sm-block">
                <SideNav
                    onSelect={(selected) => {
                        (selected)
                        navigate('/' + selected)
                    }}
                    // expanded={true}
                    style={{
                        backgroundColor: '#5b2491',

                    }}
                >
                    {/* <SideNav.Toggle /> */}
                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="tourintranet">
                        <NavItem eventKey="perfil" style={{ textAlign: 'center', marginBottom: '70px' }}>

                            <i className='bx bxs-user-circle' style={{ fontSize: '4em' }}></i>
                            <p> {role.razon_social}</p>
                        </NavItem>
                        {/*  */}

                        {
                            role.role == 1 ?
                                <NavItem eventKey="admin">
                                    <NavIcon>
                                        <i className='bx bxs-user-detail' style={{ fontSize: '1.75em' }} ></i>
                                    </NavIcon>
                                    <NavText>
                                        Admin
                                    </NavText>
                                    <NavItem eventKey="admin/usuarios">
                                        <NavText>
                                            Usuarios
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/promocion">
                                        <NavText>
                                            Promos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/tour">
                                        <NavText>
                                            Tours
                                        </NavText>
                                    </NavItem>

                                    <NavItem eventKey="admin/circuitos">
                                        <NavText>
                                            Circuitos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/tarifas">
                                        <NavText>
                                            Tarifas
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/noticias">
                                        <NavText>
                                            Noticias
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/reclamacion">
                                        <NavText>
                                            Libro de Reclamaciones
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/mensajes">
                                        <NavText>
                                            Mensajes
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                                : null
                        }
                        {/*  */}
                        <NavItem eventKey="home-intranet">
                            <NavIcon>
                                {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                                <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i>
                            </NavIcon>

                            <NavText>
                                Pagina Principal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="promo-intranet">
                            <NavIcon>
                                <i className='bx bxs-discount' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Promociones
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tour-intranet">
                            <NavIcon>
                                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                                {/* <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i> */}
                                <i className='bx bx-car' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Tours
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="circuito-intranet">
                            <NavIcon>
                                <i className='bx bx-bus' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Circuitos
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tarifa-intranet">
                            <NavIcon>
                                <i className='bx bx-wallet' style={{ fontSize: '1.75em' }}></i>

                            </NavIcon>
                            <NavText>
                                Tarifas
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="noticia-intranet">
                            <NavIcon>
                                <i className='bx bx-news' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Noticias
                            </NavText>

                        </NavItem>

                        <NavItem eventKey="contacto-intranet">
                            <NavIcon>
                                <i className='bx bx-chat' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Contactenos
                            </NavText>

                        </NavItem>
                        {/* <NavItem eventKey="login"> */}
                        <NavItem eventKey="login" onClick={() => logout()}>
                            <NavIcon>
                                <i className='bx bx-exit' style={{ fontSize: '1.75em' }} ></i>
                            </NavIcon>
                            <NavText>
                                Cerrar sesión
                            </NavText>

                        </NavItem>
                    </SideNav.Nav>

                </SideNav >
            </div>

            {isOpen &&
                <SideNav
                    onSelect={(selected) => {
                        (selected)
                        navigate('/' + selected)
                    }}
                    expanded={true}
                    style={{
                        backgroundColor: '#5b2491',

                    }}
                >
                    {/* <SideNav.Toggle /> */}
                    <SideNav.Toggle onClick={handleToggle} />

                    <SideNav.Nav defaultSelected="tourintranet">
                        <NavItem eventKey="perfil" style={{ textAlign: 'center', marginBottom: '70px' }}>

                            <i className='bx bxs-user-circle' style={{ fontSize: '4em' }}></i>
                            <p> {role.razon_social}</p>
                        </NavItem>
                        {/*  */}

                        {
                            role.role == 1 ?
                                <NavItem eventKey="admin">
                                    <NavIcon>
                                        <i className='bx bxs-user-detail' style={{ fontSize: '1.75em' }} ></i>
                                    </NavIcon>
                                    <NavText>
                                        Admin
                                    </NavText>
                                    <NavItem eventKey="admin/usuarios" onClick={handleToggle}>
                                        <NavText>
                                            Usuarios
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/promocion" onClick={handleToggle}>
                                        <NavText>
                                            Promos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/tour" onClick={handleToggle}>
                                        <NavText>
                                            Tours
                                        </NavText>
                                    </NavItem>

                                    <NavItem eventKey="admin/circuitos" onClick={handleToggle}>
                                        <NavText>
                                            Circuitos
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/tarifas" onClick={handleToggle}>
                                        <NavText>
                                            Tarifas
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/noticias" onClick={handleToggle}>
                                        <NavText>
                                            Noticias
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/reclamacion" onClick={handleToggle}>
                                        <NavText>
                                            Libro de Reclamaciones
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="admin/mensajes">
                                        <NavText>
                                            Mensajes
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                                : null
                        }
                        {/*  */}
                        <NavItem eventKey="home-intranet" onClick={handleToggle}>
                            <NavIcon>
                                {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                                <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i>
                            </NavIcon>

                            <NavText>
                                Pagina Principal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="promo-intranet" onClick={handleToggle}>
                            <NavIcon>
                                <i className='bx bxs-discount' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Promociones
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tour-intranet" onClick={handleToggle}>
                            <NavIcon>
                                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                                {/* <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i> */}
                                <i className='bx bx-car' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Tours
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="circuito-intranet" onClick={handleToggle}>
                            <NavIcon>
                                <i className='bx bx-bus' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Circuitos
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tarifa-intranet" onClick={handleToggle}>
                            <NavIcon>
                                <i className='bx bx-wallet' style={{ fontSize: '1.75em' }}></i>

                            </NavIcon>
                            <NavText>
                                Tarifas
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="noticia-intranet" onClick={handleToggle}>
                            <NavIcon>
                                <i className='bx bx-news' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Noticias
                            </NavText>

                        </NavItem>

                        <NavItem eventKey="contacto-intranet" onClick={handleToggle}>
                            <NavIcon>
                                <i className='bx bx-chat' style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Contactenos
                            </NavText>

                        </NavItem>
                        {/* <NavItem eventKey="login"> */}
                        <NavItem eventKey="login" onClick={() => logout()}>
                            <NavIcon>
                                <i className='bx bx-exit' style={{ fontSize: '1.75em' }} ></i>
                            </NavIcon>
                            <NavText>
                                Cerrar sesión
                            </NavText>

                        </NavItem>
                    </SideNav.Nav>

                </SideNav >
            }
        </>
    )
}

export default Menu