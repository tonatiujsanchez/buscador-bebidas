import useBebidas from "../hooks/useBebidas"
import FormularioTipo from "../components/FormularioTipo";
import ListadoBebidas from './../components/ListadoBebidas';



const Inicio = () => {

    const { bebidasHome, busqueda } = useBebidas();
    return (
        <>
            <FormularioTipo/>
            <ListadoBebidas bebidas={ bebidasHome } busqueda='' />
        </>
    )
}

export default Inicio