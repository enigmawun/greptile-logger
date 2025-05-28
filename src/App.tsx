import { useState, useEffect } from 'react';
import React from 'react';

import './App.css';
import { SearchProvider, useSearch } from './features/search/search-context';
import { SearchChanges } from './features/search/search';
import { Header } from '@/components/layout/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Changes from './features/changes';
import Summary from './features/summary';
import type { VersionLog } from '@/types/changelog';
import mockdata from '../CHANGE_ANALYSIS.md?raw';

// Transform the mock data into the expected Changelog format
const transformMockData = (): VersionLog[] => {
  try {
    // Extract JSON from markdown content
    const jsonMatch = mockdata.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) {
      console.error('No JSON found in markdown file');
      return [];
    }

    const jsonData = JSON.parse(jsonMatch[1].trim());
    console.log('Parsed JSON data:', jsonData); // Debug log

    // Validate the data structure
    if (!Array.isArray(jsonData) && !jsonData.changelog) {
      console.error('Invalid data structure:', jsonData);
      return [];
    }

    // If it's a single object, wrap it in an array
    const data = Array.isArray(jsonData) ? jsonData : [jsonData];
    return data;
  } catch (error) {
    console.error('Error transforming mock data:', error);
    return [];
  }
};

function App() {
  const [data, setData] = useState<VersionLog[]>([]);

  useEffect(() => {
    const fetchData = () => {
      console.log('Raw mockdata:', mockdata); // Debug raw data
      const result = transformMockData();
      console.log('Transformed data:', result); // Debug transformed data
      setData(result);
    };
    fetchData();
  }, []);

  // Don't render until we have data
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  console.log('Rendering with data:', data); // Debug render data

  return (
    <SearchProvider initialData={data}>
      <div className='container mx-auto p-4'>
        <Breadcrumb />
        <Header />
        <div className='my-4'>
          <SearchChanges />
        </div>
        <ChangelogList />
      </div>
    </SearchProvider>
  );
}

function ChangelogList() {
  const { data, filteredData, isFiltered } = useSearch();
  const displayData = isFiltered ? filteredData : data;

  console.log('ChangelogList data:', {
    data,
    filteredData,
    isFiltered,
    displayData,
  }); // Debug list data

  if (!displayData || displayData.length === 0) {
    return <div>No changes found</div>;
  }

  return (
    <div className='space-y-6'>
      {displayData.map((version: VersionLog) => (
        <React.Fragment key={version.version}>
          <Changes changelog={version.changelog} date={version.date}>
            <Summary summary={version.summary} version={version.version} />
          </Changes>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
