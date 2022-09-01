import { CaretRight, ClipboardText, Target } from "phosphor-react";
import { useState } from "react";
import { Divider } from "../Atoms/Divider";
import { Goals } from "../Goals";
import { Planning } from "../Planning";
import { ProgressBar } from "../ProgressBar";
import { Sheet } from "../Sheets/Sheet";
import { Wallet } from "../Wallet";

export function Main() {

    return (
        <main>
            <Wallet />

            {/* <Planning /> */}
            <Divider />

            <Goals />
        </main>
    )
}