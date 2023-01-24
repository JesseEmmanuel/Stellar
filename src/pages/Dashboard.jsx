import DashboardUI from "../components/DashboardUI"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"
import { motion } from 'framer-motion'

const Dashboard = () => {
    return (
            <motion.div className="layout-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
                <Header />
                <DashboardUI />
            </motion.div>
    )
}

export default Dashboard