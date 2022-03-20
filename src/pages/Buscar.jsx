import Formulario from './../components/Formulario';
import ListadoBebidas from './../components/ListadoBebidas';
import Spinner from "./../components/Spinner";

import useBebidas from '../hooks/useBebidas';


const Buscar = () => {

  const { bebidas, busqueda, loadingPages } = useBebidas();


  return (
    <>
      <Formulario />

      {loadingPages && !Object.values( busqueda ).includes('')
        ? <div className="mx-auto text-center mt-4"><Spinner /></div>
        : <ListadoBebidas bebidas={bebidas} busqueda={busqueda} />
      }
    </>
  )
}

export default Buscar