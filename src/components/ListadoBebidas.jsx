import { Row } from "react-bootstrap";
import Bebida from "./Bebida";



const ListadoBebidas = ({ bebidas, busqueda }) => {

    return (
        <Row className="mt-5">
            { bebidas.map( bebida => (
                <Bebida key={ bebida.idDrink } bebida={ bebida } busqueda={ busqueda }></Bebida>
            ))

            }   
        </Row>
    )
}

export default ListadoBebidas