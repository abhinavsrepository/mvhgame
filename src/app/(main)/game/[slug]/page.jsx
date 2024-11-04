import { getGameBySlug } from "@/lib/gameQueries"

export default async function Page({params}){
    const game =await getGameBySlug(params.slug);
    
    return(
        <div>
            <nav className="rounded-md w-full mb-4">
                <ol className="list-reset flex">
                    <li>
                        <a href="/"></a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}