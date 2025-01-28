import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import styles from '@/styles/search-bar.module.css';

const SearchBar: React.FC = () => {
  const { search, setSearch, priceMin, setPriceMin, priceMax, setPriceMax } = useFilterContext();
  return (
    <div className={styles['search-bar']}>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Min price"
        value={priceMin ?? ''}
        onChange={(e) => setPriceMin(Number(e.target.value) || undefined)}
      />
      <input
        type="text"
        placeholder="Max price"
        value={priceMax ?? ''}
        onChange={(e) => setPriceMax(Number(e.target.value) || undefined)}
      />
    </div>
  );
};

export default SearchBar;
