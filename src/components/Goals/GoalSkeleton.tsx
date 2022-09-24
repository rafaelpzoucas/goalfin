export function GoalSkeleton() {
    return (
        <div className="flex flex-col w-full h-48 p-4 gap-4 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse">
            <div className="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse"></div>

            <div className="w-full h-4 rounded-sm bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
            
            <div className="flex flex-col gap-1">
                <div className="w-1/3 h-4 rounded-sm bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
                <div className="w-2/3 h-2 rounded-sm bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="w-1/3 h-4 rounded-sm bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
                <div className="w-2/3 h-2 rounded-sm bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
            </div>
        </div>
    )
}