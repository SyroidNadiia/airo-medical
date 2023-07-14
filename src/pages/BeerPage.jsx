import { BeerRecipesList } from '../components/BeerRecipesList/BeerRecipesList';
import { Filter } from '../components/Filter/Filter';


export default function BeerPage() {
  return (
    <>
      <Filter />
      <BeerRecipesList />
    </>
  );
}
