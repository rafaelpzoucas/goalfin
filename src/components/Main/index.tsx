import { CaretRight, ClipboardText, Target } from "phosphor-react";
import { useState } from "react";
import { Goals } from "../Goals";
import { Planning } from "../Planning";
import { ProgressBar } from "../ProgressBar";
import { Sheet } from "../Sheet";
import { Wallet } from "../Wallet";

export function Main() {

    return (
        <main>
            <Wallet />

            <Planning />

            <Goals />
        </main>
    )
}