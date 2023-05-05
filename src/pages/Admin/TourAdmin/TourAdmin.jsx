import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import toursBD from '../../../apis/tours'
const URL = 'https://backend.peruexploring.pe/api/v1/tours'
const URLUPDATE = 'https://backend.peruexploring.pe/api/v1/tours-img'

import TourForm from './TourForm'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const TourAdmin = () => {
    const [tours, setTours] = useState()
    const [modal, setModal] = useState(false)
    const [estado, setEstado] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState()
    const [imgData, setImgData] = useState()
    const [prueba, setPrueba] = useState(null)
    const [archivoEnglish, setArchivoEnglish] = useState()
    const [archivoSpanish, setArchivoSpanish] = useState()
    const [isUpdate, setIsUpdate] = useState(false)

    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()

    const toggle = () => {
        setIsUpdate(false)
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };

    useEffect(() => {
        setEstado(false)
        toursBD.get()
            .then(res => setTours(res.data))
            .catch(err => console.log(err))
    }, [estado])

    const createTour = data => {

        const formData = new FormData();
        formData.append('img', imgData);
        formData.append('archivo_english', archivoEnglish);
        formData.append('archivo_spanish', archivoSpanish);
        formData.append('titulo', data.titulo);
        formData.append('lugares', data.titulo);
        formData.append('descripcion_spanish', data.descripcion_spanish);
        formData.append('descripcion_english', data.descripcion_english);
        formData.append('incluye_english', data.incluye_english);
        formData.append('incluye_spanish', data.incluye_spanish);
        formData.append('no_incluye_english', data.no_incluye_english);
        formData.append('no_incluye_spanish', data.no_incluye_spanish);
        formData.append('duracion', data.duracion);

        axios.post(URL, formData)
            .then(res => {
                console.log(res.data)
                setEstado(true)
            })
            .catch(err => console.log(err))
        // .finally(() => console.log(res.data))
    }
    const defaultValuesForm = {
        titulo: '',
        lugares: '',
        descripcion_spanish: '',
        descripcion_english: '',
        incluye_spanish: '',
        incluye_english: '',
        no_incluye_english: '',
        no_incluye_spanish: '',
        duracion: '',
        img: ''
    }

    const updateTour = (id, data) => {
        const formData = new FormData();
        formData.append('img', imgData);
        formData.append('archivo_english', archivoEnglish);
        formData.append('archivo_spanish', archivoSpanish);
        formData.append('id', data.id);
        formData.append('titulo', data.titulo);
        formData.append('lugares', data.lugares);
        formData.append('descripcion_spanish', data.descripcion_spanish);
        formData.append('descripcion_english', data.descripcion_english);
        formData.append('incluye_english', data.incluye_english);
        formData.append('incluye_spanish', data.incluye_spanish);
        formData.append('no_incluye_english', data.no_incluye_english);
        formData.append('no_incluye_spanish', data.no_incluye_spanish);
        formData.append('duracion', data.duracion);

        axios.post(`${URLUPDATE}`, formData)
            .then(res => {
                setEstado(true)
            })
            .catch(err => console.log(err))
    }

    const updateTourById = (id) => {

        toggle.call()
        setIsUpdate(true)
        toursBD.get(`/${id}`)
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

            updateTour(objUpdate?.id, data)
            reset(defaultValuesForm)
            toggle.call()

        } else {
            setIsUpdate(false)
            reset(defaultValuesForm)
            createTour(data)
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
                MySwal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
                    text: 'El registro a sido eliminado.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
                axios.delete(`${URL}/${id}/`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => console.log(err))
            }
        })
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
            name: 'Descripcion Español',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.descripcion_spanish.substring(0, 40) + "..."
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
            name: 'Actions',
            sortable: true,
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='local_buttons'>
                        <button className='btn btn-warning mx-2' onClick={() => updateTourById(row?.id)}>
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

    return (
        <>
            <div className='container'>
                <button onClick={toggle} className='btn btn-success m-2'>Registrar Tour</button>
                <DataTable
                    title="Administrar Tours"
                    columns={columns}
                    data={tours}
                    pagination
                    selectableRows
                />
                <TourForm
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
                    setPrueba={setPrueba}
                    prueba={prueba}
                    setArchivoEnglish={setArchivoEnglish}
                    setArchivoSpanish={setArchivoSpanish}
                />
            </div>
        </>
    )
}

export default TourAdmin