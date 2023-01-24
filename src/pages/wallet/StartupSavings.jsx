import React from 'react'
import StartupUI from '../../components/wallet/StartupUI'
import Sidemenu from '../../components/Sidemenu'
import Header from '../../components/Header'
import { motion } from 'framer-motion'

function StartupSavings() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Header />
  <StartupUI />
</motion.div>
)
}

export default StartupSavings