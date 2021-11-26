import React, { useEffect } from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './Layout.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './../../pages/Dashboard';
import Customer from '../../pages/Customer';
import TopNav from '../Topnav/Topnav';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('theme', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar />
                <div className="layout__content">
                    <TopNav />
                    <div className="layout__content-main">
                        <Routes>
                            <Route exact path="/" element={<Dashboard />} />
                            <Route path="/customers" element={<Customer />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter >
    )
}

export default Layout;