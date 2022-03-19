import { Routes, Route } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

import { CategoriasProvider } from './context/CategoriasProvider';
import { BebidasProvider } from './context/BebidasProvider';

import { NavLink } from "react-router-dom"

import Inicio from './pages/Inicio';
import Buscar from './pages/Buscar';
import Favoritos from './pages/Favoritos';
import Error404 from './pages/Error404';

import ModalBebida from './components/ModalBebida';





function App() {


    return (
        <CategoriasProvider>
            <BebidasProvider>
                <header className="py-3">
                    <h1 className='text-uppercase'>Buscador de bebidas</h1>
                    <Container>
                        <Menu className="justify-content-center navbar-dark" activeKey="/">
                            <NavLink className="navbar-brand" to="/">Incio</NavLink>
                            <NavLink className="navbar-brand" to="/buscar">Buscar</NavLink>

                            <NavLink className="navbar-brand text-light" to="/favoritos">Favoritos</NavLink>
                        </Menu>
                    </Container>
                </header>
                <Container className='mt-5'>
                    <Routes>
                        <Route path='*' element={<Error404 />} />
                        <Route path='/' element={<Inicio />} />
                        <Route path='/buscar' element={<Buscar />} />
                        <Route path='/favoritos' element={<Favoritos />} />
                    </Routes>
                </Container>

                <ModalBebida />

            </BebidasProvider>
        </CategoriasProvider>
    )
}

const Menu = styled.nav`
    margin-top: 32px;
    margin-bottom: 16px;
    a{
        opacity: 0.7;
        padding: 5px 10px;
        margin: 0 16px;
        border: 2px solid transparent;
    }
    a:hover{
        opacity: 1;
    }
    a.active{
        opacity: 1;
        border: 2px solid white;
        border-radius: 4px;
    }

`


export default App
