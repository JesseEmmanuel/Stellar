import React from 'react'
//import { NavItem } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const SideMenuItems = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return(
    <>
        <Link className="sidebarlink" to={item.path} activeClassName="active" onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <span className='sidebarlabel'>{item.title}</span>
            </div>
            <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
            </div>
        </Link>
        {subnav && item.subNav.map((item, index) => {
            return (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <Link className="dropdownlink" activeClassName="active" to={item.path} key={index}>
                    {item.icon}
                    <span className='sidebarlabel'>{item.title}</span>
                </Link>
                </motion.div>
            )
        })}
    </>
    )
    
}

export default SideMenuItems