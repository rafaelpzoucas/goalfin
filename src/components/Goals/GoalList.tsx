import { CaretRight, Target } from "phosphor-react";
import { Link } from "react-router-dom";
import { GoalProps } from "./goalTypes";

export function GoalList({ click, description }: GoalProps) {
    return(
        <div
            className="flex flex-col gap-4 rounded-lg border dark:border-none"
            onClick={click}
        >
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <header className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center gap-4">
                        <div className="bg-zinc-300 dark:bg-zinc-700 w-fit rounded-full text-xl p-4">
                            <Target />
                        </div>
                        <strong 
                            className="text-sm"
                        >
                            {description}
                        </strong>
                    </div>

                    <CaretRight  />
                </header>
            </div>
        </div>
    )
}