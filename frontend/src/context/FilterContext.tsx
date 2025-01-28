import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
  search: string;
  setSearch: (value: string) => void;
  priceMin: number | undefined;
  setPriceMin: (value: number | undefined) => void;
  priceMax: number | undefined;
  setPriceMax: (value: number | undefined) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [search, setSearch] = useState<string>('');
  const [priceMin, setPriceMin] = useState<number | undefined>(undefined);
  const [priceMax, setPriceMax] = useState<number | undefined>(undefined);

  const value = React.useMemo(() => ({
    search,
    setSearch,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  }), [search, priceMin, priceMax]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
