import { useEffect } from 'react';
import { BeerRecipesList } from '../components/BeerRecipesList/BeerRecipesList';
import { Filter } from '../components/Filter/Filter';


export default function BeerPage() {
   useEffect(() => {
     document.title = 'BeerPage';
   }, []);
  
  return (
    <>
      <Filter />
      <BeerRecipesList />
    </>
  );
}
