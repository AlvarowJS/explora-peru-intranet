
import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const ComunicacionForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
    submit, register, reset,
}) => {
    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Ver Mensaje</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group m-4">
                        <label htmlFor="titulo">Nombre</label>
                        <input type="text" className="form-control" id="titulo"
                            {...register('nombre')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email"
                            {...register('email')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="celular">Celular</label>
                        <input type="text" className="form-control" id="celular"
                            {...register('celular')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="mensaje">Mensaje</label>
                        <input type="text" className="form-control" id="mensaje"
                            {...register('mensaje')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
             

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

export default ComunicacionForm