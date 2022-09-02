import { MagnifyingGlass } from "phosphor-react";

export function Search() {
    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="Buscar" 
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150" 
            />
            <MagnifyingGlass className="absolute top-4 left-4" size={20} />
        </div>
    )
}