import React, { useState } from 'react';
import useDialogState from '../../../hooks/use-dialog-state';
import { Change } from '../data/schema';

type ChangesDialogType = 'feature' | 'bug' | 'deprecation' | 'task';

interface ChangesContextType {
  open: ChangesDialogType | null;
  setOpen: (str: ChangesDialogType | null) => void;
  currentRow: Change | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Change | null>>;
}

const ChangesContext = React.createContext<ChangesContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function ChangeProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ChangesDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Change | null>(null);

  return (
    <ChangesContext.Provider
      value={{ open, setOpen, currentRow, setCurrentRow }}
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
