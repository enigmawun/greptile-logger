import React, { createContext, useContext, useState, useEffect } from 'react';
import type { VersionLog } from '@/types/changelog';

interface SearchContextType {
  data: VersionLog[];
  filteredData: VersionLog[] | undefined;
  isFiltered: boolean;
  handleFilterChange: (value: string, type?: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
  children: React.ReactNode;
  initialData: VersionLog[];
}

export function SearchProvider({ children, initialData }: SearchProviderProps) {
  const [data, setData] = useState<VersionLog[]>(initialData);
  const [filteredData, setFilteredData] = useState<VersionLog[]>();
  const [isFiltered, setIsFiltered] = useState(false);

  // Update data when initialData changes
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleFilterChange = (value: string, type?: string) => {
    if (value.length > 2 || type) {
      setIsFiltered(true);
      const newArray: VersionLog[] = data.map((version) => {
        const newChangelog = version.changelog.filter((item) => {
          // Filter by type if specified
          if (type && type !== 'all' && item.type !== type) {
            return false;
          }
          // Filter by search text if specified
          if (value.length > 0) {
            const searchableText = [
              item.title,
              item.type,
              ...item.detailed_changes,
              item.impact,
              item.public_explanation,
              item.developer_explanation,
              ...item.contributors,
            ]
              .join(' ')
              .toLowerCase();

            return searchableText.includes(value.toLowerCase());
          }
          return true;
        });
        return { ...version, changelog: newChangelog };
      });
      setFilteredData(newArray);
    } else {
      setIsFiltered(false);
      setFilteredData(undefined);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        data,
        filteredData,
        isFiltered,
        handleFilterChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
