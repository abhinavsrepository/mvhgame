export default function GameCategory({category}){
    return(
        <section>
            <div className="flex justify-between gap-4">
                <h2 className="font-display mb-4 items-center ">{category.title}</h2>
            </div>
        </section>
    )
}