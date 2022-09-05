export function TransactionSkeleton() {
    return (
        <div className="flex flex-row gap-4 w-full">
            <div className="w-full max-w-[40px] h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
            <div className="flex flex-col gap-2 w-full">
                <div className="w-1/2 h-4 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                <div className="flex justify-between">
                    <div className="w-10 h-2 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                    <div className="w-10 h-3 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}