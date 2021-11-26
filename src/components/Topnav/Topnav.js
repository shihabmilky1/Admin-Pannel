import React from 'react'
import './Topnav.css'
import Dropdown from './../Dropdown/Dropdown';

import notifications from '../../assets/JsonData/notification.json'


import user_menu from '../../assets/JsonData/user_menus.json'

import { Link } from 'react-router-dom';
import ThemeMenu from '../Thememenu/ThemeMenu';


const curr_user = {
    display_name: 'Shihab Milky',
    image: 'https://avatars.githubusercontent.com/u/76476417?v=4'
}


const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = user => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="user" className="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." ClassName="" />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to="/">View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default Topnav
