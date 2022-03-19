import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"



const ModalBebida = () => {

    const { modal, handleModal, receta, cargando } = useBebidas();


    const mostrarIngredientes = () => {

        let ingredientes = [];

        for (let i = 1; i <= 15; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={`receta.idDrink${i}`}>{receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}</li>
                );
            }
        }

        return ingredientes;
    }

    return (
        cargando ? null :
        <Modal show={modal} onHide={handleModal}>
            <Image
                src={receta.strDrinkThumb}
                alt={`Imagen receta de ${receta.strDrink}`}
                title={`Imagen receta de ${receta.strDrink}`} />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h5>Ingredintes y Cantidades</h5>
                    <ul>
                        {mostrarIngredientes()}
                    </ul>
                    <h5>Instrucciones</h5>
                    <p>
                        {receta.strInstructions}
                    </p>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ModalBebida