import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import lugaresBD from './../../../apis/lugares'

const CircuitoForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData, setArchivoEnglish, setArchivoSpanish,
    submit, register, reset,
}) => {

    const watchImg = watch('img');
    const [options, setOptions] = useState()

    const handleFileChange = (e) => {
        setImgData(e.target.files[0])

        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        document.getElementById('preview-img').src = imgUrl;


    };



    // const subirArchivo = e => {
    //     setImgData(e)
    // }

    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Circuito </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group m-4">
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo"
                            {...register('titulo')}
                            placeholder="Ingresar el titulo del circuito"
                            required
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="incluye_spanish">Incluye Español</label>
                        <textarea className="form-control" id="incluye_spanish" rows="3" {...register('incluye_spanish')} required></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="incluye_english">Incluye Ingles</label>
                        <textarea className="form-control" id="incluye_english" rows="3" {...register('incluye_english')} required></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="no_incluye_spanish">No Incluye Español</label>
                        <textarea className="form-control" id="no_incluye_spanish" rows="3" {...register('no_incluye_spanish')} required></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="no_incluye_english">No Incluye Ingles</label>
                        <textarea className="form-control" id="no_incluye_english" rows="3" {...register('no_incluye_english')} required></textarea>
                    </div>


                    <div className="form-group m-4">
                        <label htmlFor="duracion">Duración</label>
                        <input type="text" className="form-control" id="duracion"
                            {...register('duracion')}
                            placeholder="9 dias/ 8 noches"
                            required
                        />
                    </div>
                

                    <div className="form-group m-4">
                        <label htmlFor="img">Subir Imagen </label>
                        {/* <input type='file' className="form-control" id="img" {...register('img')} /> */}
                        <input
                            type='file'
                            className='form-control'
                            id='img'
                            // onChange={() => subirArchivo(e.target.files)}
                            {...register('img')}
                            onChange={handleFileChange}
                            required

                        />
                        {/* {watchImg && <img id='preview-img' src={`https://backend.peruexploring.pe/storage/tours/${image}`} alt='preview' style={{ width: '200px', margin: '10px' }} />} */}
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="archivo_english">Subir Archivo en Ingles </label>
                        {/* <input type='file' className="form-control" id="img" {...register('img')} /> */}
                        <input
                            type='file'
                            className='form-control'
                            id='archivo_english'
                            // onChange={() => subirArchivo(e.target.files)}
                            {...register('archivo_english')}
                            onChange={(e) => {
                                setArchivoEnglish(e.target.files[0]);
                            }}
                            required

                        />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="archivo_spanish">Subir Archivo en Español </label>
                        {/* <input type='file' className="form-control" id="img" {...register('img')} /> */}
                        <input
                            type='file'
                            className='form-control'
                            id='archivo_spanish'
                            // onChange={() => subirArchivo(e.target.files)}
                            {...register('archivo_spanish')}
                            onChange={(e) => {
                                setArchivoSpanish(e.target.files[0]);
                            }}
                            required
                        />
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

export default CircuitoForm

/////////////
// import React from 'react'

// const CircuitoForm = () => {
//     return (
//         <div>CircuitoForm</div>
//     )
// }

// export default CircuitoForm