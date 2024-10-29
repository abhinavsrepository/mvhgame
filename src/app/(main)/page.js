import CategorySlider from "@/components/Sliders/CategorySlider";
import HeroSlider from "@/components/Sliders/HeroSlider";
import { getGameCategories } from "@/lib/gameQueries";



export default async function Home() {
  const allCategories =await getGameCategories();

  return (
   <>
   <HeroSlider/>
   <CategorySlider categories ={allCategories}/>
 

   </>
  );
}
