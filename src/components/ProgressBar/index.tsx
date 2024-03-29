export function ProgressBar() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row justify-between text-xs text-slate-400">
                <span>Renda</span>
                <span>Faltam R$ 1.800,00</span>
            </div>
            <div>
                <div className="relative w-full h-1 bg-slate-200 dark:bg-slate-600">
                    <div className="absolute w-1/3 h-1 bg-brand-500"></div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <strong className="text-base text-brand-500">R$ 200,00</strong>
                <span className="text-xs text-slate-400">R$ 2.000,00</span>
            </div>
        </div>
    )
}