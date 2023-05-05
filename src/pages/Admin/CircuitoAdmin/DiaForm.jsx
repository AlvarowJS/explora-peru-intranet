import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import lugaresBD from './../../../apis/lugares'

const DiaForm = ({
    modalDia, toggleDia, handleSubmit,
    submitDia, register, reset,
}) => {

    // const subirArchivo = e => {
    //     setImgData(e)
    // }

    return (
        <Modal show={modalDia} onHide={toggleDia} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Dia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submitDia)}>
                    <div className="form-group m-4">
                        <label htmlFor="nombre">Nombre Español</label>
                        <input type="text" className="form-control" id="nombre"
                            {...register('nombre')}
                            placeholder="Ingresar Nombre referencial del dia"
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="nombre_english">Nombre Ingles</label>
                        <input type="text" className="form-control" id="nombre_english"
                            {...register('nombre_english')}
                            placeholder="Ingresar Nombre referencial del dia"
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="horario">Horario Español</label>
                        <input type="text" className="form-control" id="horario"
                            {...register('horario')}
                            placeholder="Lima, Cuzco (8 OCTUBRE)"
                            required
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="horario_english">Horario Ingles</label>
                        <input type="text" className="form-control" id="horario_english"
                            {...register('horario_english')}
                            placeholder="Lima, Cuzco (8 OCTUBRE)"
                            required
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="descripcion">Descripcion Español</label>
                        <textarea className="form-control" id="descripcion" rows="3" {...register('descripcion')} required></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="descripcion_english">Descripcion Ingles</label>
                        <textarea className="form-control" id="descripcion_english" rows="3" {...register('descripcion_english')} required></textarea>
                    </div>
                    <button className='btn btn-primary m-4'>Enviar</button>
                </form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>

    )
}

export default DiaForm