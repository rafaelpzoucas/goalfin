import { CaretRight, DotsThreeVertical, Target } from "phosphor-react"

interface GoalProps {
    type?: "select-new-goal" | "selected-goal"
    click?: () => void
}

export function Goal({ click, type }: GoalProps) {

    return (
        <div 
            className="flex flex-col gap-8"
            onClick={click}
        >
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-zinc-700 p-3">
                    <Target size={24} />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <header className="flex flex-row items-center justify-between">
                        <strong>Praia</strong>
                        {
                            type !== "select-new-goal"
                            ? <DotsThreeVertical size={24} />
                            : <CaretRight size={20} />
                        }
                    </header>

                    {
                      type === "select-new-goal" &&
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">R$ 2.000,00 economizados</span>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}