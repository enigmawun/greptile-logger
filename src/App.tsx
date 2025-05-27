import { useState, useEffect } from 'react';
import React from 'react';

import './App.css';
import { Main } from '@/components/layout/main';
import { SearchProvider } from '@/context/search-context';
import { SearchChanges } from '@/features/changes/components/search';
import { Header } from '@/components/layout/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { SelectDropdown } from '@/components/select-dropdown';
import Changes from './features/changes';
import Summary from './features/summary';
import type { VersionLog } from '@/types/changelog';
import mockdata from '@/assets/changelog_master.json';
import mockdata2 from '@/assets/changelog_cli.json';

// Transform the mock data into the expected Changelog format
const transformMockData = (): VersionLog[] => {
  // Transform each change to match our schema

  const combinedChanges = [JSON.parse(JSON.stringify(mockdata))];
  combinedChanges.push(JSON.parse(JSON.stringify(mockdata2)));
  console.log(combinedChanges);
  return combinedChanges;
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
