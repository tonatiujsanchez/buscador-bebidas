import useBebidas from "../hooks/useBebidas"
import FormularioTipo from "../components/FormularioTipo";
import ListadoBebidas from './../components/ListadoBebidas';
import Spinner from "./../components/Spinner";


const Inicio = () => {

    const { bebidasHome, loadingPages } = useBebidas();
    return (
        <>
            <FormularioTipo/>
            {  loadingPages 
                ? <div className="mx-auto text-center mt-5"><Spinner /></div> 
                : <ListadoBebidas bebidas={ bebidasHome } />
            }
            
        </>
    )
}

export default Inicio