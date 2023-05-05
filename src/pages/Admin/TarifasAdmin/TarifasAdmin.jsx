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

const TarifasAdmin = () => {
    const [tarifas, setTarifas] = useState()
    const [estado, setEstado] = useState(false)
    const [modal, setModal] = useState(false)

    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()

    const toggle = () => {
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };
    const updateTarifa = (id, data) => {
        axios.patch(`${URL}/${id}`, data)
            .then(res => {
            })
            .catch(err => console.log(err))
    }
    const updateTarifaById = (id) => {

        toggle.call()
        tarifaBD.get(`/${id}`)
            .then(res => {
                setObjUpdate(res?.data)
                const object = res?.data
                reset(object)
            })
            .catch(err => console.log(err))

    }

    const createTarifa = data => {
        axios.post(URL, data)
            .then(res => {
            })
            .catch(err => console.log(err))
        // .finally(() => console.log(res.data))
    }

    const submit = data => {
        if (objUpdate !== undefined) {

            updateTarifa(objUpdate?.id, data)
            reset(defaultValuesForm)
            toggle.call()

        } else {
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
    const descargarTarifa = (archivo) => {
        window.open(`https://backend.peruexploring.pe/storage/tarifario/${archivo}`, '_blank');

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
                        <button className='btn btn-success' onClick={() => descargarTarifa(row?.archivo)}>
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
                            row?.user.razon_social
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
                            row?.user.ruc
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
            />
        </div>
    )
}

export default TarifasAdmin