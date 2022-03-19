import Formulario from './../components/Formulario';
import ListadoBebidas from './../components/ListadoBebidas';


import useBebidas from '../hooks/useBebidas';

const Buscar = () => {

  const { bebidas, busqueda } = useBebidas();


  return (
    <>
      <Formulario />
      <ListadoBebidas bebidas={ bebidas } busqueda={ busqueda } />
    </>
  )
}

export default Buscar