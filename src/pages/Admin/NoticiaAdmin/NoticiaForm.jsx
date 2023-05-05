import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const NoticiaForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
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

    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Noticias</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group m-4">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo"
                            {...register('titulo')}
                            placeholder="Ingresar el titulo de la noticia"
                            required
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="nota">Nota</label>
                        <textarea className="form-control" id="nota" rows="3" {...register('nota')} required></textarea>
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="titulo">Título Ingles</label>
                        <input type="text" className="form-control" id="titulo_ingles"
                            {...register('titulo_ingles')}
                            placeholder="Ingresar el titulo de la noticia en ingles"
                            required
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="nota_ingles">Nota Ingles</label>
                        <textarea className="form-control" id="nota_ingles" rows="3" {...register('nota_ingles')} required></textarea>
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
                        {watchImg && <img id='preview-img' src={`https://backend.peruexploring.pe/storage/noticias/${image}`} alt='preview' style={{ width: '200px', margin: '10px' }} />}
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

export default NoticiaForm