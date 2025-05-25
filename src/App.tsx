import { useState } from 'react';

import './App.css';
import { Main } from '@/components/layout/main';
import { SearchProvider } from '@/context/search-context';
import { SearchChanges } from '@/features/changes/components/search';
import { Header } from '@/components/layout/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { SelectDropdown } from '@/components/select-dropdown';
import Changes from './features/changes';
import Summary from './features/summary';
function App() {
  return (
    <>
      <SearchProvider>
        <Breadcrumb />
        <Header></Header>
        <Changes>
          <Summary />
        </Changes>
      </SearchProvider>
    </>
  );
}

export default App;
