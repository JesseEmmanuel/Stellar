import React from 'react'
import Sidemenu from '../../components/Sidemenu'
import GreatUI from '../../components/wallet/GreatUI'
import Header from '../../components/Header'
import { motion } from 'framer-motion'

function GreatSavings() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Header />
  <GreatUI />
</motion.div>
)
}

export default GreatSavings