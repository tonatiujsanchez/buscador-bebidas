import { useState } from 'react'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'



const Formulario = () => {

    const [ alerta, setAlerta ] = useState('')

    const { categorias } = useCategorias();
    const { getBebidas, busqueda, setBusqueda } = useBebidas();

    const handleSubmit = ( e ) =>{
        e.preventDefault()

        if( Object.values( busqueda ).includes('') ){
            setAlerta( 'Todos los campos son obligatorios' )
            return
        }
        setAlerta('')
        getBebidas( busqueda );
    }


    return (
        <Form onSubmit={ handleSubmit } >
            { alerta && <Alert variant='danger' className='text-center'>{ alerta  }</Alert> }
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ej: Tequila, Vodka, Gin, etc'
                            id='nombre'
                            name='nombre'
                            value={ busqueda.nombre }
                            onChange= { (e) => setBusqueda({ ...busqueda, [e.target.name]: e.target.value }) } />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={ busqueda.categoria }
                            onChange={ (e)=> setBusqueda({ 
                                ...busqueda,
                                [e.target.name]: e.target.value
                                }) } >

                            <option value="">--Seleccione Categoría--</option>
                            { categorias.map( categoria => (
                                <option 
                                    key={ categoria.strCategory } 
                                    value={categoria.strCategory} >
                                        { categoria.strCategory }
                                </option>
                            ))

                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end mt-2'>
                <Col md={3}>
                    <Button type='submit' className='btn-danger text-uppercase w-100 py-2 fw-bold'>Buscar</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario