import { Modal, Image, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import useStorage from "../hooks/useStorage";



const ModalBebida = () => {

    const { modal, handleModal, receta, cargando } = useBebidas();
    const { toggleFavorito, favoritos } = useStorage();

    const esFavorito = favoritos.some( favoritoSome => favoritoSome.idDrink === receta.idDrink );


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
                <Modal.Footer>
                    <Button
                        variant="warning"
                        className="w-100 mt-3 fw-bold text-uppercase mb-3"
                        onClick={() => { toggleFavorito({
                            idDrink: receta.idDrink, 
                            strDrink:receta.strDrink, 
                            strDrinkThumb:receta.strDrinkThumb
                            }, esFavorito) }}>
                        { esFavorito ? 'Remover de mis favoritos 💔' :'Agregar a Favoritos ❤'}
                    </Button>
                </Modal.Footer>

            </Modal>
    )
}

export default ModalBebida