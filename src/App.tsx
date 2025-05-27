import { useState, useEffect } from 'react';
import React from 'react';

import './App.css';
import { SearchProvider } from '@/context/search-context';
import { SearchChanges } from '@/features/changes/components/search';
import { Header } from '@/components/layout/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Changes from './features/changes';
import Summary from './features/summary';
import type { VersionLog } from '@/types/changelog';
import mockdata from '/CHANGE_ANALYSIS.md?raw';

// Transform the mock data into the expected Changelog format
const transformMockData = (): VersionLog[] => {
  // Extract JSON from markdown content
  const jsonMatch = mockdata.match(/```json\n([\s\S]*?)\n```/);
  if (!jsonMatch) {
    console.error('No JSON found in markdown file. Content:', mockdata);
    return [];
  }

  try {
    const jsonData = JSON.parse(jsonMatch[1].trim());
    return [jsonData];
  } catch (error) {
    console.error('Error parsing JSON from markdown:', error);
    return [];
  }
};

function App() {
  const [data, setData] = useState<VersionLog[]>([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('/api/changes');
    //   const data = await response.json();
    //   setData(data);
    // };
    const fetchData = () => {
      setData(transformMockData());
    };
    fetchData();
  }, []);
  return (
    <>
      <SearchProvider>
        <Breadcrumb />
        <Header></Header>
        <SearchChanges />

        {data.map((version) => (
          <React.Fragment key={version.version}>
            <Changes changelog={version.changelog} date={version.date}>
              <Summary summary={version.summary} version={version.version} />
            </Changes>
          </React.Fragment>
        ))}
      </SearchProvider>
    </>
  );
}

export default App;
