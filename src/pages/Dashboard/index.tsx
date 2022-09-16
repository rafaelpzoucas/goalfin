import { motion } from "framer-motion";
import { Divider } from "../../components/Atoms/Divider";
import { Goals } from "../../components/Goals";
import { Header } from "../../components/Header";
import { Wallet } from "../../components/Wallet";

export function Dashboard() {
    return (
        <motion.div
            initial={{ x: (innerWidth) * -1 }}
            animate={{ x: 0 }}
            exit={{ x: window.innerWidth }}
        >
            <Header />

            <main>
                <Wallet />
                <Divider />
                <Goals />
            </main>
        </motion.div>
    )
}