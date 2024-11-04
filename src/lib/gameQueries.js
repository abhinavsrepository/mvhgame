import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export async function getGamesBySelectedCategories({categoryIds}){
  return await prisma.category.findMany({
    where:{
      id:{
        in:categoryIds
      },
      games:{
        some:{
          published:true
        }
      }
    },select:{
      title:true,
      slug:true,
      games:{
        where:{
          published:true
        },
        select:{
          id:true,
          title:true,
          slug:true,
          description:true,
          game_url:true,
          created_at:true

        }
      }
    }
  })
}








export async function getGamesByCategoryId(categoryId){
  return await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    select: {
      title: true,
      slug: true,
      games: {
        where: {
          published: true,
        },
        take: 8,
      },
    },
  })
}


export async function getGameCategories(){
    return await prisma.category.findMany({})
}

export async function getCategoryMenu(){
    return await prisma.category.findMany({
        include :{
            games:true
        }
    })
}




export async function getSearchResults(params){
    return await prisma.game.findMany({
        where: {
          title: {
            contains: params,
          },
        },
        take: 100,
      });
}
