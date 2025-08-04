import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';
import { useActionState, use } from 'react';

const productsPromise = searchProducts();

const Search = () => {
  const action = async (prevState, formData) => {
    console.log({ formData });
    const { category, query } = Object.fromEntries(formData);
    const minPrice = Number.isNaN(parseFloat(formData.get('minPrice')))
      ? undefined
      : parseFloat(formData.get('minPrice'));
    const maxPrice = Number.isNaN(parseFloat(formData.get('maxPrice')))
      ? undefined
      : parseFloat(formData.get('maxPrice'));
    const result = await searchProducts({ category, minPrice, maxPrice, query });
    return result;
  };

  const [state, formAction, isPending] = useActionState(action, use(productsPromise));

  return (
    <div className='flex flex-col items-center'>
      <SearchForm formAction={formAction} />
      {/* <SearchResults productsPromise={productsPromise} /> */}
      <SearchResults products={state.products} />
      <Instructions path='/search.md' />
    </div>
  );
};

export default Search;
