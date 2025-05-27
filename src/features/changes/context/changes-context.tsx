import React, { useState } from 'react';
import useDialogState from '../../../hooks/use-dialog-state';
import { Change } from '../data/schema';
import { useChanges } from '../hooks/use-changes';
type ChangesDialogType = 'feature' | 'bug' | 'deprecation' | 'task';

interface ChangesContextType {
  open: ChangesDialogType | null;
  setOpen: (str: ChangesDialogType | null) => void;
  currentRow: Change | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Change | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredChanges: Change[];
}

const ChangesContext = React.createContext<ChangesContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function ChangeProvider({ children }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // You will need to get the full list of changes, e.g. from props or a data hook
  const { data: ChangelogData } = useChanges();
  const allChanges = data || [];
  const filteredChanges = allChanges.filter(
    (change) =>
      change.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      change.detailed_changes.some((detail) =>
        detail.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <ChangesContext.Provider
      value={{
        open,
        setOpen,
        currentRow,
        setCurrentRow,
        searchQuery,
        setSearchQuery,
        filteredChanges,
      }}
    >
      {children}
    </ChangesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChanges = () => {
  const changesContext = React.useContext(ChangesContext);

  if (!changesContext) {
    throw new Error('useChanges has to be used within <ChangesContext>');
  }

  return changesContext;
};
