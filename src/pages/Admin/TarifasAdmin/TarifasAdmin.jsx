import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import tarifaBD from '../../../apis/tarifas'
import TarifasForm from './TarifasForm'
const MySwal = withReactContent(Swal)
const URL = 'https://backend.peruexploring.pe/api/v1/tarifa'
const URLUPDATE = 'https://backend.peruexploring.pe/api/v1/tarifa-file'

const TarifasAdmin = () => {
    const [tarifas, setTarifas] = useState()
    const [estado, setEstado] = useState(false)
    const [modal, setModal] = useState(false)

    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()
    const [isUpdate, setIsUpdate] = useState(false)
    const [archivo, setArchivo] = useState()
    const toggle = () => {
        setIsUpdate(false)
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };
    const defaultValuesForm = {
        nombre_tarifa: '',
        user_id: '',
        archivo: '',
    }
    const updateTarifa = (id, data) => {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('id', data.id);
        formData.append('nombre_tarifa', data.nombre_tarifa);
        formData.append('user_id', data.user_id);
        axios.post(`${URLUPDATE}`, formData)
            .then(res => {
                setEstado(true)
            })
            .catch(err => console.log(err))
    }
    const updateTarifaById = (id) => {

        toggle.call()
        setIsUpdate(true)
        tarifaBD.get(`/${id}`)
            .then(res => {
                setObjUpdate(res?.data)
                const object = res?.data
                reset(object)
            })
            .catch(err => console.log(err))

    }

    const createTarifa = data => {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('nombre_tarifa', data.nombre_tarifa);
        formData.append('user_id', data.user_id);
        axios.post(URL, formData)
            .then(res => {
                setEstado(true)
            })
            .catch(err => console.log(err))
        // .finally(() => console.log(res.data))
    }

    const submit = data => {
        // if (objUpdate !== undefined) {
        if (isUpdate) {
            updateTarifa(objUpdate?.id, data)
            reset(defaultValuesForm)
            toggle.call()

        } else {
            setIsUpdate(false)
            reset(defaultValuesForm)
            createTarifa(data)
            toggle.call()
        }
    }

    const deleteTarifaById = (id) => {
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
                axios.delete(`${URL}/${id}/`)
                    .then(res => {
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    useEffect(() => {
        setEstado(false)
        tarifaBD.get()
            .then(res => setTarifas(res.data))
            .catch(err => console.log(err))
    }, [estado])
    const descargarTarifa = (archivo, nombre_tarifa) => {
        window.open(`https://backend.peruexploring.pe/storage/tarifario/${nombre_tarifa}/${archivo}`, '_blank');

    }
    const columns = [
        {
            name: 'Nombre referencial',
            sortable: true,
            cell: row => {
                return (
                    <div style={{ margin: '10px' }}>
                        {
                            row?.nombre_tarifa
                        }
                    </div>
                )
            }
        },
        {
            name: 'Tarifario PDF',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        <button className='btn btn-success' onClick={() => descargarTarifa(row?.archivo, row?.nombre_tarifa)}>
                            <i className='bx bx-file' style={{ fontSize: '30px' }}></i>
                        </button>

                    </div >
                )
            }
        },
        {
            name: 'Empresa Asociada',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.user?.razon_social
                            // row?.user.razon_social == undefined ? null : row?.user.razon_social
                        }

                    </div >
                )
            }
        },
        {
            name: 'Empresa RUC',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.user?.ruc
                            // row?.user.ruc == undefined ? null : row?.user.ruc
                        }

                    </div >
                )
            }
        },
        {
            name: 'Fecha',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            // row?.created_at
                            new Date(row?.created_at).toLocaleDateString('es-ES')
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
                        <button className='btn btn-warning mx-2' onClick={() => updateTarifaById(row?.id)}>
                            <i className='bx bx-edit' ></i>
                        </button>

                        <button className='btn btn-danger' onClick={() => deleteTarifaById(row?.id)}>
                            <i className='bx bx-trash' ></i>
                        </button>
                    </div>
                )
            }
        }

    ]
    return (
        <div className='container'>
            <button onClick={toggle} className='btn btn-success m-2'>Registrar Tarifa</button>
            <DataTable
                title="Administrar Tarifas"
                columns={columns}
                data={tarifas}
                pagination
                selectableRows
            />
            <TarifasForm
                toggle={toggle}
                modal={modal}
                setModal={setModal}
                handleSubmit={handleSubmit}
                submit={submit}
                register={register}
                reset={reset}
                watch={watch}
                setArchivo={setArchivo}
            />
        </div>
    )
}

export default TarifasAdmin