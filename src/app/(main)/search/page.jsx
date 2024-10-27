import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function getDate(q) {
  const games = await prisma.game.findMany({
    where: { title: { contains: q } },
  });
}
export default async function Page(req) {
  return (
    <div>
      <h1>search results</h1>
    </div>
  );
}
