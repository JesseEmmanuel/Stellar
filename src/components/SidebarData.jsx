import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as TbIcons from 'react-icons/tb'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'





export const Dashboard = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <BiIcons.BiChevronRight/>
    },
    // {
    //     title: 'Genealogy',
    //     path: '#',
    //     icon: <BiIcons.BiNetworkChart/>,
    //     iconClosed: <TbIcons.TbChevronsDown/>,
    //     iconOpened: <TbIcons.TbChevronsUp/>,
    //     subNav: [
    //         {
    //             title: 'Startup Savings',
    //             path: '/genealogy/StartupSavings',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //         {
    //             title: 'Great Savings',
    //             path: '/genealogy/GreatSavings',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //         {
    //             title: 'Logs',
    //             path: '/genealogy/Logs',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //     ]
    // },
    
    // {
    //     title: 'Wallet',
    //     path: '#',
    //     icon: <FaIcons.FaWallet/>,
    //     iconClosed: <TbIcons.TbChevronsDown/>,
    //     iconOpened: <TbIcons.TbChevronsUp/>,
    //     subNav: [
    //         {
    //             title: 'Startup Savings',
    //             path: '/wallet/StartupSavings',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //         {
    //             title: 'Great Savings',
    //             path: '/wallet/GreatSavings',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //         {
    //             title: 'History',
    //             path: '/wallet/History',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //     ]
    // },
    
    // {
    //     title: 'Rewards',
    //     path: '#',
    //     icon: <BsIcons.BsStars/>,
    //     iconClosed: <TbIcons.TbChevronsDown/>,
    //     iconOpened: <TbIcons.TbChevronsUp/>,
    //     subNav: [
    //         {
    //             title: 'Star Rewards',
    //             path: '/rewards/Check_Rewards',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //         {
    //             title: 'Redemtion History',
    //             path: '/rewards/Redemption_History',
    //             icon: <TbIcons.TbChevronsRight/>,
    //         },
    //     ]
    // },
    // {
    //     title: 'Profile',
    //     path: '/Profile',
    //     icon: <RiIcons.RiUserSettingsFill/>
    // },
    
]

export const Genealogy = [
    {
        title: 'Startup Savings',
        path: '/genealogy/StartupSavings',
        icon: <BiIcons.BiChevronRight/>,
    },
    {
        title: 'Great Savings',
        path: '/genealogy/GreatSavings',
        icon: <BiIcons.BiChevronRight/>,
    },
    {
        title: 'Logs',
        path: '/genealogy/Logs',
        icon: <BiIcons.BiChevronRight/>,
    },
]

export const Wallet = [
    {
        title: 'Startup Savings',
        path: '/wallet/StartupSavings',
        icon: <BiIcons.BiChevronRight/>,
    },
    {
        title: 'Great Savings',
        path: '/wallet/GreatSavings',
        icon: <BiIcons.BiChevronRight/>,
    },
    {
        title: 'Wallet History',
        path: '/wallet/History',
        icon: <BiIcons.BiChevronRight/>,
    },
]

export const Rewards = [
    {
        title: 'Star Rewards',
        path: '/rewards/Check_Rewards',
        icon: <BiIcons.BiChevronRight/>,
    },
    {
        title: 'Redemtion History',
        path: '/rewards/Redemption_History',
        icon: <BiIcons.BiChevronRight/>,
    },
]