import { MagnifyingGlass } from "phosphor-react";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
    const { 
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    function handleSearch(data: SearchFormInputs) {
        console.log(data)
    }

    return (
        <form 
            className="relative flex flex-row"
            onSubmit={handleSubmit(handleSearch)}
        >
            <input 
                type="text" 
                placeholder="Buscar" 
                className="w-full p-4 rounded-tr-none rounded-br-none rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700 focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150"
                {...register('query')}
            />
            <button 
                type="submit" 
                className="p-4 rounded-tl-none rounded-bl-none rounded-lg bg-zinc-500 disabled:opacity-25"
                disabled={isSubmitting}
            >
                <MagnifyingGlass className=" top-4 left-4" size={20} />
            </button>
        </form>
    )
}