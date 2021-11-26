import React from 'react'
import './Sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link, useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2';

const SidebarItem = props => {
    const active = props.active ? 'active' : '';

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}


const Sidebar = () => {
    const location = useLocation()
    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)

    return (
        <div className="sidebar">
            <Scrollbars style={{ width: '100%', height: '100%' }}>
                <div className="sidebar__logo">
                    <img src={logo} alt="company logo" className="" />
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link to={item.route} key={index} className="">
                            <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem} />
                        </Link>
                    ))
                }
            </Scrollbars>
        </div>
    )
}

export default Sidebar
