import React from 'react'
import Header from '../../components/Header'
import Sidemenu from '../../components/Sidemenu'
import Redemption_HistoryUI from '../../components/rewards/Redemption_HistoryUI'
import { motion } from 'framer-motion'

function Redemption_History() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Header />
  <Redemption_HistoryUI />
</motion.div>
)
}

export default Redemption_History