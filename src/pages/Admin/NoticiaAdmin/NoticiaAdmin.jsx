import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
const URL = 'https://backend.peruexploring.pe/api/v1/noticias'
const URLIMG = 'https://backend.peruexploring.pe/api/v1/noticias-img'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import NoticiaForm from './NoticiaForm'
import noticiasBD from '../../../apis/noticias'
const MySwal = withReactContent(Swal)


const NoticiaAdmin = () => {
  const [noticias, setNoticias] = useState()
  const [modal, setModal] = useState(false)
  const [estado, setEstado] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState()
  const [imgData, setImgData] = useState()
  const [prueba, setPrueba] = useState(null)
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
    noticiasBD.get()
      .then(res => setNoticias(res.data))
      .catch(err => console.log(err))
  }, [estado])
  const createNoticia = data => {

    const formData = new FormData();
    formData.append('img', imgData);
    formData.append('titulo', data.titulo);
    formData.append('nota', data.nota);
    formData.append('titulo_ingles', data.titulo_ingles);
    formData.append('nota_ingles', data.nota_ingles);

    axios.post(URL, formData)
      .then(res => {
        setEstado(true)
      })
      .catch(err => console.log(err))
    // .finally(() => console.log(res.data))
  }

  const defaultValuesForm = {
    titulo: '',
    nota: '',
    img: '',
    nota_ingles: '',
    titulo_ingles: ''
  }

  const updateNoticia = (id, data) => {

    // axios.patch(`${URL}/${id}`, data)
    // .then(res => {
    //   setEstado(true)
    // })
    // .catch(err => console.log(err))    
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('img', imgData);
    formData.append('titulo', data.titulo);
    formData.append('nota', data.nota);
    formData.append('titulo_ingles', data.titulo_ingles);
    formData.append('nota_ingles', data.nota_ingles);
    console.log(formData, "Adsasd")
    axios.post(`${URLIMG}`, formData)
      .then(res => {
        setEstado(true)
        // setObjUpdate(undefined)
        
      })
      .catch(err => console.log(err))
  }
  console.log(objUpdate)
  const updateNoticiaById = (id) => {
    toggle.call()
    setIsUpdate(true)
    noticiasBD.get(`/${id}`)
      .then(res => {
        setObjUpdate(res?.data)
        const object = res?.data
        reset(object)
      })
      .catch(err => console.log(err))
  }

  const submit = data => {
    console.log(data, "data")
    // if (objUpdate !== undefined) {
      if (isUpdate) {
      updateNoticia(objUpdate?.id, data)
      reset(defaultValuesForm)
      toggle.call()

    } else {
      setIsUpdate(false)
      reset(defaultValuesForm)
      createNoticia(data)
      toggle.call()
    }
  }
  console.log(isUpdate, "?")
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
        axios.delete(`${URL}/${id}/`)
          .then(res => {
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
      name: 'Nota',

      sortable: true,
      cell: row => {
        return (
          <div>
            {
              row?.nota.substring(0, 40) + "..."
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
            <button className='btn btn-warning mx-2' onClick={() => updateNoticiaById(row?.id)}>
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
        <button onClick={toggle} className='btn btn-success m-2'>Registrar Noticia</button>
        <DataTable
          title="Administrar Noticias"
          columns={columns}
          data={noticias}
          pagination
          selectableRows
        />
        <NoticiaForm
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

export default NoticiaAdmin