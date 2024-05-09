import React from 'react';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>}, {
                path: '/Shop',
                element: <Shop/>}, {
                path: '/About',
                element: <About/>}, {
                path: '/Contact',
                element: <Contact/>},
        ]
    }])
function Routes() {
    return <RouterProvider router={router}/>
}

export default Routes;
