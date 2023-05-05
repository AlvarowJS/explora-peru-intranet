import React, { useEffect, useState } from 'react'
import './../style.css'
import './Usuario.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import usuarioBD from '../../../apis/usuarios'
const MySwal = withReactContent(Swal)
const URLACTIVATE = 'https://backend.peruexploring.pe/api/active-user'
const URLDESACTIVATE = 'https://backend.peruexploring.pe/api/desactivate-user'
const URLDELETE = 'https://backend.peruexploring.pe/api/delete-users'

const UsuariosAdmin = () => {
  const [users, setUsers] = useState()
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
    usuarioBD.get()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [estado])
  const activeUser = (id) => {
    return MySwal.fire({
      title: '¿Estás seguro de Activar este usuario?',
      text: "Podra desactivarlo luego",
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
          title: 'Usuario activado!',
          text: 'El usuario podra loguarse.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        axios.put(`${URLACTIVATE}/${id}`)
          .then(res => {
            setEstado(true)
          })
          .catch(err => console.log(err))
      }
    })

  }
  const desactiveUser = (id) => {
    return MySwal.fire({
      title: '¿Estás seguro de Desactivar este usuario?',
      text: "Podra activarlo luego",
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
          title: 'Usuario Desactivado!',
          text: 'El usuario no podra loguarse.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        axios.put(`${URLDESACTIVATE}/${id}`)
          .then(res => {
            setEstado(true)
          })
          .catch(err => console.log(err))
      }
    })
  }
  const deleteUserById = (id) => {
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
        axios.delete(`${URLDELETE}/${id}/`)
          .then(res => {
          })
          .catch(err => console.log(err))
      }
    })
  }
  const columns = [
    {
      name: 'Razón Social',
      sortable: true,
      cell: row => {
        return (
          <div style={{ margin: '10px' }}>
            {
              row?.razon_social
            }
          </div>
        )
      }
    },
    {
      name: 'RUC',

      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.ruc
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
      name: 'Numero Cel',
      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.telefono
            }
          </div>
        )
      }
    },
    {
      name: 'Estado',
      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.active == true ? 'Activo' : 'Inactivo'
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
            <button className='btn btn-success' onClick={() => activeUser(row?.id)}>
              <i className='bx  bxs-user-check' ></i>

            </button>
            <button className='btn btn-warning' onClick={() => desactiveUser(row?.id)}>
              <i className='bx bxs-user-minus' ></i>
            </button>
            <button className='btn btn-danger' onClick={() => deleteUserById(row?.id)}>
              <i className='bx bx-trash' ></i>
            </button>

          </div>
        )
      }
    }

  ]

  return (
    <div className='container'>
      <DataTable
        title="Administrar Usuarios"
        columns={columns}
        data={users}
        pagination
        selectableRows
      />
    </div>
  )
}

export default UsuariosAdmin