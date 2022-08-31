import { CaretRight, DotsThreeVertical, Target } from "phosphor-react"
import { ProgressBar } from "../ProgressBar"

interface GoalProps {
    type?: "select-new-goal" | "selected-goal" | "detailed"
    click?: () => void
}

export function Goal({ click, type }: GoalProps) {

    return (
        <div 
            className={`
                flex flex-col gap-4
                ${type === 'detailed' && 'p-4 bg-zinc-800 rounded-lg'}
            `}
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
                            type === "select-new-goal"
                            ? <CaretRight size={20} />
                            : type === "selected-goal"
                            ? <DotsThreeVertical size={24} />
                            : <CaretRight size={16} />
                        }
                    </header>

                    {
                      type === "select-new-goal" ? (
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">R$ 2.000,00 economizados</span>
                        </div> 
                      ) : type === "detailed" && (
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">R$ 2.000,00 economizados</span>
                        </div> 
                      )
                    }

                </div>
            </div>
            {
                type === "detailed" && 
                <div>
                    <ProgressBar />
                </div>
            }
        </div>
    )
}