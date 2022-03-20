import { useState, useEffect, createContext } from 'react'
import axios from 'axios';


const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {

    const [ bebidasHome, setBebidaHome ] = useState([]);
    const [ tipoBebidas, setTipoBebidas ] = useState('Alcoholic');

    const [bebidas, setBebidas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const [modal, setModal] = useState(false);
    const [bebidaId, setBebidaId] = useState(null);
    const [receta, setReceta] = useState({});
    const [cargando, setCargando] = useState(false);
    const [loadingPages, setLoadingPages] = useState(false);



    useEffect(()=>{
        setLoadingPages(true);
        const getBebidasHome = async()=> {
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${tipoBebidas}`;
                const { data } = await axios.get( url );
                setBebidaHome( data.drinks );
            } catch (error) {
                console.log(error);        
            }finally{
                setTimeout(() => {
                    setLoadingPages(false)
                }, 500);
            }
        }
        getBebidasHome();
    },[tipoBebidas]);

    // Obtener la receta completa cada el el bebidaId cambie
    useEffect(() => {
        if (!bebidaId) return;
        setCargando(true)
        const getReceta = async () => {
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
                const { data } = await axios.get(url);

                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        getReceta();
    }, [bebidaId])


    const handleBebidaTipo = (tipo) =>{
        setTipoBebidas(tipo)
    }

    // Obtener el listado de bebidas buscadas por ingrediente y categoria
    const getBebidas = async (busqueda) => {
        setLoadingPages(true);
        try {
            const { nombre, categoria } = busqueda;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            const { data } = await axios.get(url);
            setBebidas(data.drinks);
        } catch (error) {
            console.log(error);
        }finally{
            setLoadingPages(false);
        }
    }

    // Mostramos y ocultamos el modal
    const handleModal = () => {
        setModal(!modal)
    }

    // Seteamos el estado de bebidaId
    const handleBebidaId = (idBebida) => {
        setBebidaId(idBebida)
    }


    return (
        <BebidasContext.Provider
            value={{
                bebidasHome,
                tipoBebidas,
                handleBebidaTipo,
                bebidas,
                getBebidas,
                busqueda,
                setBusqueda,
                modal,
                handleModal,
                handleBebidaId,
                receta,
                cargando,
                loadingPages
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export { BebidasProvider }
export default BebidasContext