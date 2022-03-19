import { useState, useEffect, createContext } from 'react';
import axios from 'axios';


const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
    
    const [ categorias, setCategoria ] = useState([]);

    const getCategorias = async() =>{
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const { data } = await axios.get(url);
            setCategoria( data.drinks )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
        value={{
            categorias
        }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext
