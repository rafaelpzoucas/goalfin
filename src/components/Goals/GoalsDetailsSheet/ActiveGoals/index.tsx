import { Goal } from "../../Goal";

export function ActiveGoals() {
    return (
        <div className="flex flex-col gap-8 p-4 bg-zinc-900">
            <div className="flex gap-4">
                <div className="flex flex-col w-full p-4 rounded-lg bg-zinc-800">
                    <span className="text-xs text-zinc-400">Total em objetivos</span>
                    <strong className="text-xl">R$ 500,00</strong>
                </div>
                <div className="flex flex-col w-full p-4 rounded-lg bg-zinc-800">
                    <span className="text-xs text-zinc-400">Total economizado</span>
                    <strong className="text-xl">R$ 50,00</strong>
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-xs text-zinc-400">Falta economizar este mês</span>
                <strong className="text-2xl">R$ 50,00</strong>
            </div>

            <div className="flex flex-col gap-2">
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
                <Goal type="detailed" />
            </div>
        </div>
    )
}