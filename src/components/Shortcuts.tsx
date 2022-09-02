import { ArrowsDownUp, Bank, Coins, Target } from "phosphor-react";
import { Shortcut } from "./Atoms/Shortcut";

export function Shortcuts() {
    return (
        <section className="flex flex-row">
            <div className="flex flex-start gap-4">
                <Shortcut label="Guardar">
                    <Coins />
                </Shortcut>
                <Shortcut label="Objetivo">
                    <Target />
                </Shortcut>
                <Shortcut label="Transação">
                    <ArrowsDownUp />
                </Shortcut>
                <Shortcut label="Nova conta">
                    <Bank />
                </Shortcut>
            </div>
        </section>
    )
}