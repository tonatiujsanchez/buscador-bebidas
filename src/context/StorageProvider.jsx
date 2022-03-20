import { createContext, useEffect, useState } from "react";


const StorageContext = createContext();

const StorageProvider = ({ children }) => {

    const [ favoritos, setFavoritos ] = useState([]);

    const keyStorage = 'bebidas-f7e7-024993c1c3ef-45f2-b9ab';

    useEffect(()=>{
        const favoritosLS = JSON.parse(localStorage.getItem(keyStorage)) ?? [];
        setFavoritos(favoritosLS);
    },[])

    useEffect(()=>{
        localStorage.setItem(keyStorage, JSON.stringify(favoritos) );
    },[favoritos]);

    const toggleFavorito = ( favorito, esFavorito )=>{

        if (esFavorito) {
            const favoritoTemp = favoritos.filter( favoritoFilter => favoritoFilter.idDrink !== favorito.idDrink);
            setFavoritos( favoritoTemp );    
        }else{
            setFavoritos([ ...favoritos, favorito ]);
        }

    }

    return(
        <StorageContext.Provider
        value={{
            toggleFavorito,
            favoritos
        }}>
            { children }
        </StorageContext.Provider>
    )
}

export{
    StorageProvider
}

export default StorageContext
