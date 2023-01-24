import React from 'react'
import Sidemenu from '../../components/Sidemenu'
import Header from '../../components/Header'
import Check_RewardsUI from '../../components/rewards/Check_RewardsUI'
import { motion } from 'framer-motion'

function Check_Rewards() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Header />
    <Check_RewardsUI />
</motion.div>
)
}

export default Check_Rewards