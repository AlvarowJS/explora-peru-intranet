import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import circuitoBD from '../../../apis/circuitos'
const URL = 'https://backend.peruexploring.pe/public/api/v1/circuitos'
const URLDIAS = 'https://backend.peruexploring.pe/public/api/v1/dias'
const URLUPDATE = 'https://backend.peruexploring.pe/public/api/v1/circuitos-img'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CircuitoForm from './CircuitoForm'
import circuitosBD from '../../../apis/circuitos'
import DiaForm from './DiaForm'
import diasBD from '../../../apis/dias'
const MySwal = withReactContent(Swal)

const CircuitoAdmin = () => {
    const [circuito, setCircuito] = useState()
    const [modal, setModal] = useState(false)
    const [modalDia, setModalDia] = useState(false)
    const [estado, setEstado] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState()
    const [imgData, setImgData] = useState()
    const [archivoEnglish, setArchivoEnglish] = useState()
    const [archivoSpanish, setArchivoSpanish] = useState()
    const [prueba, setPrueba] = useState(null)
    const [idCirc, setIdCirc] = useState()
    const [isUpdate, setIsUpdate] = useState(false)
    const [filter, setFilter] = useState()
    const [search, setSearch] = useState()
    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()
    const [objUpdateDia, setObjUpdateDia] = useState()

    const toggle = () => {
        setIsUpdate(false)
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };

    const toggleDia = () => {
        // setIdCirc(id)
        setModalDia(!modalDia)
        if (objUpdateDia !== undefined) {
            reset(defaultValuesFormDia)
        }
    };

    useEffect(() => {
        if (circuito) {
            setFilter(circuito?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
        }
    }, [search])
    const buscarCircuito = () => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        setEstado(false)
        circuitoBD.get()
            .then(res => setCircuito(res.data))
            .catch(err => console.log(err))
    }, [estado])

    const createCircuito = data => {

        const formData = new FormData();
        formData.append('img', imgData);
        formData.append('archivo_english', archivoEnglish);
        formData.append('archivo_spanish', archivoSpanish);
        formData.append('titulo', data.titulo);
        formData.append('incluye_english', data.incluye_english);
        formData.append('incluye_spanish', data.incluye_spanish);
        formData.append('no_incluye_english', data.no_incluye_english);
        formData.append('no_incluye_spanish', data.no_incluye_spanish);
        formData.append('duracion', data.duracion);
        axios.post(URL, formData)
            .then(res => {
                setEstado(true)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Circuito Registrado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err))
        // .finally(() => console.log(res.data))
    }
    const defaultValuesForm = {
        titulo: '',
        no_incluye_spanish: '',
        no_incluye_english: '',
        incluye_spanish: '',
        incluye_english: '',
        duracion: '',
        img: '',
        archivo_english: '',
        archivo_spanish: ''
    }


    const updateCircuito = (id, data) => {
        // console.log(prueba, 'check1')
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('img', imgData);
        formData.append('archivo_english', archivoEnglish);
        formData.append('archivo_spanish', archivoSpanish);
        formData.append('titulo', data.titulo);
        formData.append('incluye_english', data.incluye_english);
        formData.append('incluye_spanish', data.incluye_spanish);
        formData.append('no_incluye_english', data.no_incluye_english);
        formData.append('no_incluye_spanish', data.no_incluye_spanish);
        formData.append('duracion', data.duracion);

        axios.post(`${URLUPDATE}`, formData)
            .then(res => {
                setEstado(true)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Circuito Actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err))
    }

    const updateCircuitoById = (id) => {

        toggle.call()
        setIsUpdate(true)
        circuitosBD.get(`/${id}`)
            .then(res => {
                setObjUpdate(res?.data)
                const object = res?.data
                reset(object)
            })
            .catch(err => console.log(err))

    }

    const submit = data => {
        // if (objUpdate !== undefined) {
        if (isUpdate) {
            updateCircuito(objUpdate?.id, data)
            reset(defaultValuesForm)
            toggle.call()

        } else {
            setIsUpdate(false)
            reset(defaultValuesForm)
            createCircuito(data)
            toggle.call()
        }
    }

    const deleteTourById = (id) => {
        return MySwal.fire({
            title: '¿Estás seguro de eliminar?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            setEstado(true)
            if (result.value) {
                axios.delete(`${URL}/${id}/`)
                    .then(res => {
                        MySwal.fire({
                            icon: 'success',
                            title: 'Eliminado!',
                            text: 'El registro a sido eliminado.',
                            customClass: {
                                confirmButton: 'btn btn-success'
                            }
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Primero elimine todos los dias!',
                        })
                    })
            }
        })
    }

    // Administras dias
    const createDia = data => {

        const formData = new FormData();
        formData.append('circuito_id', idCirc);
        formData.append('nombre', data.nombre);
        formData.append('horario', data.horario);
        formData.append('descripcion', data.descripcion);
        formData.append('nombre_english', data.nombre_english);
        formData.append('horario_english', data.horario_english);
        formData.append('descripcion_english', data.descripcion_english);
        axios.post(URLDIAS, formData)
            .then(res => {
                setEstado(true)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dia Registrada',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err))
    }
    const defaultValuesFormDia = {
        nombre: '',
        horario: '',
        descripcion: '',
        nombre_english: '',
        horario_english: '',
        descripcion_english: '',
    }
    const updateDia = (id, data) => {
        // console.log(prueba, 'check1')
        // const formData = new FormData();
        // formData.append('circuito_id', idCirc);
        // formData.append('nombre', data.nombre);
        // formData.append('horario', data.horario);
        // formData.append('descripcion', data.descripcion);
        // formData.append('nombre_english', data.nombre_english);
        // formData.append('horario_english', data.horario_english);
        // formData.append('descripcion_english', data.descripcion_english);

        axios.patch(`${URLDIAS}/${id}`, data)
            .then(res => {
                setEstado(true)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Dia Actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err))
    }
    const updateDiaById = (id) => {
        toggleDia.call()
        diasBD.get(`/${id}`)
            .then(res => {
                setObjUpdateDia(res?.data)
                const object = res?.data
                reset(object)
            })
            .catch(err => console.log(err))
    }
    const deleteDiaById = (id) => {
        return MySwal.fire({
            title: '¿Estás seguro de eliminar?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            setEstado(true)
            if (result.value) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
                    text: 'El registro a sido eliminado.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
                axios.delete(`${URLDIAS}/${id}/`)
                    .then(res => {
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    const registrarDia = (id) => {
        setIdCirc(id)
        toggleDia.call()
    }
    const submitDia = data => {
        if (objUpdateDia !== undefined) {
            updateDia(objUpdateDia?.id, data)
            toggleDia.call()

        } else {
            createDia(data)
            toggleDia.call()
        }
    }

    const columns = [
        {
            name: 'Titulo',
            sortable: true,
            cell: row => {
                return (
                    <div style={{ margin: '10px' }}>
                        {
                            row?.titulo
                        }
                    </div>
                )
            }
        },
        {
            name: 'Incluye',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.incluye_spanish.substring(0, 40) + "..."
                        }
                    </div>
                )
            }
        },
        {
            name: 'No Incluye',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.no_incluye_spanish.substring(0, 40) + "..."
                        }
                    </div>
                )
            }
        },
        {
            name: 'Dias',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            (row?.dias).length
                        }
                    </div>
                )
            }
        },
        {
            name: 'Actions',
            sortable: true,
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='local_buttons'>
                        <button className='btn btn-success' onClick={() => registrarDia(row?.id)}>
                            <i className='bx bxs-calendar'></i>
                        </button>
                        <button className='btn btn-warning mx-2' onClick={() => updateCircuitoById(row?.id)}>
                            <i className='bx bx-edit-alt' ></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => deleteTourById(row?.id)}>
                            <i className='bx bx-trash' ></i>
                        </button>

                    </div>
                )
            }
        }

    ]
    const subColumns = [
        {
            name: 'Nombre',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.nombre
                        }
                    </div>
                )
            }
        },
        {
            name: 'Horario',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.horario
                        }
                    </div>
                )
            }
        },
        {
            name: 'Descripción',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.descripcion
                        }
                    </div>
                )
            }
        },
        {
            name: 'Acciones',
            sortable: true,
            cell: row => {
                return (
                    <div className='local_buttons'>
                        <button className='btn btn-outline-warning' onClick={() => updateDiaById(row?.id)}>
                            <i class='bx bx-edit-alt' ></i>
                        </button>
                        <button className='btn btn-outline-danger' onClick={() => deleteDiaById(row?.id)}>
                            <i class='bx bx-trash' ></i>
                        </button>
                    </div>
                )
            }
        },
    ];

    const expandableRowsComponent = ({ circuito }) => (

        <DataTable
            columns={subColumns}
            data={circuito?.dias}
            noHeader
        />
    );
    const ExpandedComponent = ({ data }) =>
        <DataTable
            columns={subColumns}
            data={data?.dias}
            noHeader
            selectableRows
        />

    return (
        <>
            <div className='container'>
                <button onClick={toggle} className='btn btn-success m-2'>Registrar Circuito</button>
                <div className='tours__filters'>
                    <div className='tours__filters--buscador'>
                        <input type="text" onChange={() => buscarCircuito()} placeholder='buscar por titulo'/><i className='bx bx-search-alt-2'></i>
                    </div>
                </div>
                <DataTable
                    title="Administrar Circuitos"
                    columns={columns}
                    data={filter ? filter : circuito}
                    pagination
                    // selectableRows
                    expandableRows
                    // expandableRowsComponent={expandableRowsComponent}
                    expandableRowsComponent={ExpandedComponent}
                />
                <CircuitoForm
                    toggle={toggle}
                    modal={modal}
                    setModal={setModal}
                    handleSubmit={handleSubmit}
                    submit={submit}
                    register={register}
                    reset={reset}
                    watch={watch}
                    image={image}
                    setImgData={setImgData}
                    imgData={imgData}
                    archivoEnglish={archivoEnglish}
                    archivoSpanish={archivoSpanish}
                    setArchivoEnglish={setArchivoEnglish}
                    setArchivoSpanish={setArchivoSpanish}
                    setPrueba={setPrueba}
                    prueba={prueba}
                />
                <DiaForm
                    toggleDia={toggleDia}
                    modalDia={modalDia}
                    setModalDia={setModalDia}
                    handleSubmit={handleSubmit}
                    submitDia={submitDia}
                    register={register}
                    reset={reset}
                    idCirc={idCirc}
                />
            </div>
        </>
    )
}

export default CircuitoAdmin
