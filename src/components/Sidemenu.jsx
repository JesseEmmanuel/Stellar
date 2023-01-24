//import { Link, NavLink } from 'react-router-dom'
//import { useState } from 'react';
//import { Nav, Dropdown } from 'react-bootstrap'
import styled from 'styled-components';
import { Dashboard, Genealogy, Wallet, Rewards } from './SidebarData';
import SubMenu from './SideMenuItems';
import { useAuth } from '../contexts/Auth';
import '../App.css'

const Sidemenu = () => {
    const user = useAuth()
    return(
        <aside id="layout-menu-fixed" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className='logo' to="#">
                    <img src={process.env.PUBLIC_URL + "/assets/img/icons/stellar.png" } alt="" width="180"/>
                </div>
                <div sidebarwrap='sidebar'>
                    <div className=''>
                        <li className="menu-header small text-uppercase my-0"><span className="menu-header-text">At A Glance</span></li>
                        {Dashboard.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                        <li className="menu-header small text-uppercase my-0"><span className="menu-header-text">Genealogy</span></li>
                        {Genealogy.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                        <li className="menu-header small text-uppercase my-0"><span className="menu-header-text">Wallet</span></li>
                        {Wallet.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                        <li className="menu-header small text-uppercase my-0"><span className="menu-header-text">Rewards</span></li>
                        {Rewards.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </div>
                </div>
        </aside>
    ) 
}

export default Sidemenu