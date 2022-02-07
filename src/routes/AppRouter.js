import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';


export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <div className='container mt-3'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='*' element={
                        <main className='p-4'>
                            <h1>Error 404</h1>
                        </main>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
};
