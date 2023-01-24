import React from 'react'
import Header from '../../components/Header'
import Sidemenu from '../../components/Sidemenu'
import HistoryUI from '../../components/rewards/HistoryUI'
import { motion } from 'framer-motion'

function History() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Header />
  <HistoryUI />
</motion.div>
)
}

export default History