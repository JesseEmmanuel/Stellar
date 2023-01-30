import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as TbIcons from 'react-icons/tb'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'

export const MenuItems = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <RiIcons.RiDashboardFill/>   
    },
    {
        title: 'Startup Savings',
        path: '/genealogy/StartupSavings',
        icon: <RiIcons.RiPlantFill/>,
    },
    {
        title: 'Great Savings',
        path: '/genealogy/GreatSavings',
        icon: <TbIcons.TbChevronsUp/>,
    },
    {
        title: 'Star Rewards',
        path: '/rewards/Check_Rewards',
        icon: <IoIcons.IoIosGift/>,
    },
    {
        title: 'Transactions',
        path: '/genealogy/Logs',
        icon: <BiIcons.BiTransfer/>,
    },

]