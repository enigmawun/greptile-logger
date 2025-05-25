import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';

import { Search } from '@/components/search';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import ChangeProvider from './context/changes-context';
import { changes } from './data/changes';
import Summary from '../summary';
export default function Changes() {
  return (
    <ChangeProvider>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
          <div className='flex flex-col gap-y-1 items-start w-full border-2 border-slate-200 rounded-md p-4'>
            <h2 className='text-2xl font-bold tracking-tight text-left'>
              Version 2.0
            </h2>
            <Summary />
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'></div>
      </Main>
    </ChangeProvider>
  );
}
