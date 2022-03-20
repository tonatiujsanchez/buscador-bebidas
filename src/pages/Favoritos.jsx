import styled from "styled-components";
import ListadoBebidas from "../components/ListadoBebidas"
import useStorage from "../hooks/useStorage"



const Favoritos = () => {
    const { favoritos } = useStorage();
    return (
        <>
            { favoritos.length > 0
                ? <ListadoBebidas bebidas={favoritos} />
                : <TextoSinFavoritos>No hay favoritos agregados</TextoSinFavoritos>
            }
            

        </>
    )
}

const TextoSinFavoritos = styled.h3`
    text-align: center;
    margin-top: 120px;
    opacity: 0.5;
    font-size: 1.5rem;
    text-transform: uppercase;

`

export default Favoritos