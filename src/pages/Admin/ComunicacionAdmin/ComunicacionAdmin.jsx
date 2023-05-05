import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import contactenosBD from '../../../apis/contactos'
const URL = 'https://backend.peruexploring.pe/api/v1/contactenos'

import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ComunicacionForm from './ComunicacionForm'

const MySwal = withReactContent(Swal)


const ComunicacionAdmin = () => {
  const [contactos, setContactos] = useState()
  const [modal, setModal] = useState(false)
  const [estado, setEstado] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState()
  const [imgData, setImgData] = useState()
  const [prueba, setPrueba] = useState(null)
  const { handleSubmit, register, reset, watch } = useForm()
  const [objUpdate, setObjUpdate] = useState()

  const toggle = () => {
    setModal(!modal)
    if (objUpdate !== undefined) {
      reset(defaultValuesForm)
    }
  };

  useEffect(() => {
    setEstado(false)
    contactenosBD.get()
      .then(res => setContactos(res.data))
      .catch(err => console.log(err))
  }, [estado])

  const createcontactenos = data => {

    axios.post(URL, data)
      .then(res => {
      })
      .catch(err => console.log(err))
    // .finally(() => console.log(res.data))
  }


  const updateContactenos = (id, data) => {

    axios.patch(`${URL}/${id}`, data)
      .then(res => {
      })
      .catch(err => console.log(err))
  }

  const updatecontactenosById = (id) => {

    toggle.call()
    contactenosBD.get(`/${id}`)
      .then(res => {
        setObjUpdate(res?.data)
        const object = res?.data
        reset(object)
      })
      .catch(err => console.log(err))

  }

  const submit = data => {
    if (objUpdate !== undefined) {

      updateContactenos(objUpdate?.id, data)
      toggle.call()

    } else {
      createContactenos(data)
      toggle.call()
    }
  }

  const deleteContactenosById = (id) => {
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
            console.log(res)
          })
          .catch(err => console.log(err))
      }
    })
  }
  const columns = [
    {
      name: 'Nombre',
      sortable: true,
      cell: row => {
        return (
          <div style={{ margin: '10px' }}>
            {
              row?.nombre
            }
          </div>
        )
      }
    },
    {
      name: 'Telefono',

      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.celular
            }
          </div>
        )
      }
    },
    {
      name: 'Email',

      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.email
            }
          </div>
        )
      }
    },
    {
      name: 'Mensaje',
      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.mensaje
            }
          </div>
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
            <button className='btn btn-warning mx-2' onClick={() => updatecontactenosById(row?.id)}>
              <i className='bx bx-low-vision' ></i>
            </button>
            <button className='btn btn-danger' onClick={() => deleteContactenosById(row?.id)}>
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
        <DataTable
          title="Administrar contactenoss"
          columns={columns}
          data={contactos}
          pagination
          selectableRows
        />
        <ComunicacionForm
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
        />
      </div>
    </>
  )
}
export default ComunicacionAdmin