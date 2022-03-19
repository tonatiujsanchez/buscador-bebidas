import { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';


const FormularioTipo = () => {
    const { tipoBebidas, handleBebidaTipo } = useBebidas();
    // const [ typo, setTypo ] = useState('Alcoholic');

    return (
        <Form>
            <Row className="justify-content-center">
                <Col lg={6}>
                <Form.Group className='mb-3'>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={ tipoBebidas }
                            onChange={ ( e )=> handleBebidaTipo(e.target.value) } >

                            <option value="Alcoholic">Bebidas con Alcohol </option>
                            <option value="Non_Alcoholic">Bebidas sin Alcohol</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default FormularioTipo