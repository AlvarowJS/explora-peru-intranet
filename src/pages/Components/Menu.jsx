import React, { useEffect, useState } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import './Menu.css'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleNavItemSelect = (selected) => {
        setSelectedNavItem(selected);
        navigate('/' + selected);
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

                <button onClick={handleToggle} className='button_menu'
                    style={{ color: "#5b2491", border: "none", padding: "7px", borderRadius: "8px", top: "10px", left: "10px" }}
                >
                    <i className='bx bx-menu' style={{ color: "#5b2491", fontWeight: "bold", fontSize: "30px" }}></i>
                </button>
            </div>

            <div className="d-none d-sm-block">
                <SideNav
                    onSelect={handleNavItemSelect}

                    // expanded={true}
                    style={{
                        backgroundColor: '#5b2491',

                    }}
                >
                    {/* <SideNav.Toggle /> */}
                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="tourintranet">
                        <NavItem eventKey="perfil" style={{
                            textAlign: 'center', marginBottom: '70px'
                        }}>

                            <i className='bx bxs-user-circle' style={{ fontSize: '4em' }}></i>
                            <p> {role.razon_social}</p>
                        </NavItem>
                        {/*  */}

                        {
                            role.role == 1 ?
                                <NavItem eventKey="admin"
                                    style={{
                                        color: selectedNavItem === 'admin' ? 'red' : '',
                                        borderTopLeftRadius: selectedNavItem === 'admin' ? '20px' : '',
                                        borderBottomLeftRadius: selectedNavItem === 'admin' ? '20px' : '',
                                        backgroundColor: selectedNavItem === 'admin' ? 'white' : '',
                                    }}
                                >
                                    <NavIcon>
                                        <i className='bx bxs-user-detail' style={{
                                            fontSize: '1.75em',
                                            color: selectedNavItem === 'admin' ? '#5b2491' : '',
                                        }} ></i>
                                    </NavIcon>
                                    <NavText
                                        style={{
                                            color: selectedNavItem === 'admin' ? '#5b2491' : '',
                                        }}
                                    >
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
                        <NavItem eventKey="home-intranet"
                            style={{
                                color: selectedNavItem === 'home-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'home-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'home-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'home-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-home-alt-2' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'home-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>

                            <NavText style={{
                                color: selectedNavItem === 'home-intranet' ? '#5b2491' : '',
                            }}>
                                Pagina Principal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="promo-intranet"
                            style={{
                                color: selectedNavItem === 'promo-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'promo-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'promo-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'promo-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bxs-discount' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'promo-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'promo-intranet' ? '#5b2491' : '',
                            }}>
                                Promociones
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tour-intranet"
                            style={{
                                color: selectedNavItem === 'tour-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'tour-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'tour-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'tour-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-car' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'tour-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'tour-intranet' ? '#5b2491' : '',
                            }}>
                                Tours
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="circuito-intranet"
                            style={{
                                color: selectedNavItem === 'circuito-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'circuito-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'circuito-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'circuito-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-bus' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'circuito-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'circuito-intranet' ? '#5b2491' : '',
                            }}>
                                Circuitos
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="tarifa-intranet"
                            style={{
                                color: selectedNavItem === 'tarifa-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'tarifa-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'tarifa-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'tarifa-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-wallet' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'tarifa-intranet' ? '#5b2491' : '',
                                }}></i>

                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'tarifa-intranet' ? '#5b2491' : '',
                            }}>
                                Tarifas
                            </NavText>

                        </NavItem>
                        <NavItem eventKey="noticia-intranet"
                            style={{
                                color: selectedNavItem === 'noticia-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'noticia-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'noticia-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'noticia-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-news' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'noticia-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'noticia-intranet' ? '#5b2491' : '',
                            }}>
                                Noticias
                            </NavText>

                        </NavItem>

                        <NavItem eventKey="contacto-intranet"
                            style={{
                                color: selectedNavItem === 'contacto-intranet' ? 'red' : '',
                                borderTopLeftRadius: selectedNavItem === 'contacto-intranet' ? '20px' : '',
                                borderBottomLeftRadius: selectedNavItem === 'contacto-intranet' ? '20px' : '',
                                backgroundColor: selectedNavItem === 'contacto-intranet' ? 'white' : '',
                            }}
                        >
                            <NavIcon>
                                <i className='bx bx-chat' style={{
                                    fontSize: '1.75em',
                                    color: selectedNavItem === 'contacto-intranet' ? '#5b2491' : '',
                                }}></i>
                            </NavIcon>
                            <NavText style={{
                                color: selectedNavItem === 'contacto-intranet' ? '#5b2491' : '',
                            }}>
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