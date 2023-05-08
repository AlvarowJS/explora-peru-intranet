import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import usuarioBD from '../../../apis/usuarios';


const TarifasForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,setArchivo,
    submit, register, reset
}) => {
    const [options, setOptions] = useState()
    useEffect(() => {
        usuarioBD.get()
            .then(res => setOptions(res.data))
            .catch(err => console.log(err))
    }, [])

    const watchImg = watch('img');

    const handleFileChange = (e) => {
        setImgData(e.target.files[0])

        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        document.getElementById('preview-img').src = imgUrl;


    };

    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Tarifa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group m-4">
                        <label htmlFor="nombre_tarifa">Nombre Referencial</label>
                        <input type="text" className="form-control" id="nombre_tarifa"
                            {...register('nombre_tarifa')}
                            placeholder="Ingresar nombre referencial para la tarifa"
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="nombre_tarifa">Seleccionar al Usuario</label>
                        <select className="form-select" id="user_id" {...register("user_id")}>
                            {
                                options?.map(option => (
                                    <option key={option.id} value={option.id}>{option.razon_social}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="img">Subir Archivo </label>
                        {/* <input type='file' className="form-control" id="img" {...register('img')} /> */}
                        <input
                            type='file'
                            className='form-control'
                            id='img'
                            // onChange={() => subirArchivo(e.target.files)}
                            {...register('img')}
                            // onChange={handleFileChange}
                            onChange={(e) => {
                                setArchivo(e.target.files[0]);
                            }}
                        />
                        {/* {watchImg && <img id='preview-img' src={`https://auxbackend.peruexploring.pe/storage/tours/${image}`} alt='preview' style={{ width: '200px', margin: '10px' }} />} */}
                    </div>
                    <button className='btn btn-primary m-4'>Enviar</button>
                    <button className='btn btn-secondary' onClick={toggle}>Cancelar</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Guardar Cambios
                </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default TarifasForm