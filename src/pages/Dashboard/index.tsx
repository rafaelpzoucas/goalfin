import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Divider } from "../../components/Atoms/Divider";
import { slidePageLeftToRight, slidePageRightToLeft } from "../../components/Atoms/PageAnimations";
import { Goals } from "../../components/Goals";
import { Header } from "../../components/Header";
import { Wallet } from "../../components/Wallet";

export function Dashboard() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, []) 

    return (
        <motion.div
            variants={!isLoaded ? slidePageLeftToRight : slidePageRightToLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
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