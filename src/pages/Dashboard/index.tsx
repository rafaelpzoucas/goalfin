import { Divider } from "../../components/Atoms/Divider";
import { Goals } from "../../components/Goals";
import { Header } from "../../components/Header";
import { Wallet } from "../../components/Wallet";

export function Dashboard() {
    return (
        <div>
            <Header />

            <main>
                <Wallet />
                <Divider />
                <Goals />
            </main>
        </div>
    )
}