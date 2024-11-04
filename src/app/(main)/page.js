import GameCategory from "@/components/GameCategory";
import CategorySlider from "@/components/Sliders/CategorySlider";
import HeroSlider from "@/components/Sliders/HeroSlider";
import { getGameCategories ,getGamesByCategoryId,getGamesBySelectedCategories} from "@/lib/gameQueries";




export default async function Home() {
  // const allCategories =await getGameCategories();
  // const category =await getGamesByCategoryId(1);
  const [allCategories,category ] =await Promise.all([
    getGameCategories(),
    getGamesByCategoryId(1)

  ])
  

  const selectedCategoryIds =[1,2,5];
  const multipleCategories = await getGamesBySelectedCategories(selectedCategoryIds);

  return (
   <>
   <HeroSlider/>
   <CategorySlider categories ={allCategories}/>
   <GameCategory category={category}/>
   {/* <GameCategory category={multipleCategories[0]}/> */}

  
   {/* <pre>{JSON.stringify(multipleCategories,null,2)}</pre> */}

 

   </>
  );
}
