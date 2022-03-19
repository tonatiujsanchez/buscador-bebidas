import { Col, Card, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const Bebida = ({ bebida, busqueda }) => {

    const{ handleModal, handleBebidaId } = useBebidas();

    return (
        <Col md={6} lg={4}>
            <Card className="mb-4">
                <Card.Img variant="top" src={bebida.strDrinkThumb} alt={bebida.strDrink} title={bebida.strDrink} />
                <Card.Body>
                    <Card.Title className="fw-bold">{bebida.strDrink}</Card.Title>
                    { busqueda?.nombre && <Card.Text> Bebida de { busqueda.categoria } con { busqueda.nombre } </Card.Text> }
                    <Button 
                        variant="warning" 
                        className="w-100 mt-3 fw-bold text-uppercase"
                        onClick={ ()=>{
                            handleModal()
                            handleBebidaId( bebida.idDrink )
                        }}>
                            Ver Receta
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Bebida