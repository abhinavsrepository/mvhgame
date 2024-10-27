import { PrismaClient } from "@prisma/client";
import Image from "next/image";
const prisma = new PrismaClient();
async function getData(q) {
  const games = await prisma.game.findMany({
    where: {
      title: {
        contains: q,
      },
    },
    take: 100,
  });
  return games;
}
export default async function Page(req) {
  const searchQuery = req.searchParams.q;
  
  let games;
  if (searchQuery) {
      games =await  getData(searchQuery);
  }
  else {
    games=[];
  }
  
  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl mb-4">
        {searchQuery?`Search result for ${searchQuery}`:
        "No search result provided"}
        
      </h1>
      <div className="text-accent mb-4">{`${games?.length} results`}</div>
      <ul>{games. map((game)=>(
        <li key={game.id}>
          <a href={`/game/${game.slug}`} className="flex ga-4 bg-main hover:bg-accent-secondary p-4 rounded-lg">
          <Image src={`/game/${game.image}`} alt ={game.title}
          className="w-2/6 lg:w-1/6"/>
          </a>
        </li>

      ))}</ul>
    </div>
  );
}
