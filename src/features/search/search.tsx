import { SearchForm } from './searchform';
import { useSearch } from './search-context';

export function SearchChanges() {
  const { handleFilterChange } = useSearch();
  return <SearchForm handleFilterChange={handleFilterChange} />;
}

export default SearchChanges;
