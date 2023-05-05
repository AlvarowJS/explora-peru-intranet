import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const ReclamacionForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
    submit, register, reset,
}) => {
    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Ver Reclamo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)} className='reclamacion'>
              
                    <h3>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="nombre_completo">NOMBRE COMPLETO (*):</label>
                            <input type="text" className="form-control"
                                {...register('nombre_completo')} required
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="dni">DNI / CE (*):</label>
                            <input type="text" className="form-control" id='dni'
                                {...register('dni')} required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="telefono">TELEFÓNO:</label>
                            <input type="text" className="form-control" id='telefono'
                                {...register('telefono')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="email">EMAIL (*):</label>
                            <input type="email" className="form-control" id='email'
                                {...register('email')} required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="padre">PADRE O MADRE : (MENORES DE EDAD):</label>
                            <input type="text" className="form-control"
                                {...register('padre')} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="domicilio">DOMICILIO (*):</label>
                            <input type="text" className="form-control" id='domicilio'
                                {...register('domicilio')} required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="pais">PAÍS:</label>
                            <input type="text" className="form-control" id='pais'
                                {...register('pais')} />
                        </div>

                    </div>
                    <h3>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h3>
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="relacion">BIEN / SERVICIO:</label>
                            <select type="text" className="form-control"
                                {...register('relacion')} >
                                <option value='producto'>Producto</option>
                                <option value='servicio'>Servicio</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <label htmlFor="monto_reclamado">MONTO RECLAMADO:</label>
                            <input type="text" className="form-control"
                                {...register('monto_reclamado')} />
                        </div>
                        <div className="col-2">
                            <label htmlFor="moneda_tipo">MONEDA:</label>
                            <select type="text" className="form-control"
                                {...register('moneda_tipo')}>
                                <option value='producto'>S/.</option>
                                <option value='servicio'>US $</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="descripcion">DESCRIPCIÓN(*)</label>
                            <input type="text" className="form-control"
                                {...register('descripcion')} required />
                        </div>
                    </div>
                    <h3>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</h3>
                    <div className="form-group">
                        <label for="accion">ELIJA LA ACCIÓN QUE DESEA REALIZAR (*):</label>
                        <select className="form-control" id="accion" {...register('accion')}>
                            <option value='reclamo'>Reclamo</option>
                            <option value='queja'>Queja</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="accion">DETALLE (*):</label>
                        <textarea className="form-control" id="detalle" rows="3" {...register('detalle')} required>

                        </textarea>
                        <p>   Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>
                    <div className="form-group">
                        <label for="pedido">PEDIDO (*):</label>
                        <textarea className="form-control" id="pedido" rows="3" {...register('pedido')} required>

                        </textarea>
                        <p> Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

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

export default ReclamacionForm