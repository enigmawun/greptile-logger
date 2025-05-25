import {
  IconCash,
  IconShield,
  IconUsersGroup,
  IconUserShield,
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
} from '@tabler/icons-react';
import { changeCategory } from '@/features/changes/data/schema';
/*
export const callTypes = new Map<changeCategory, string>([
  [
    'Feature',
    'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200',
  ],
  ['Bug Fix', 'bg-neutral-300/40 border-neutral-300'],
  [
    'Configuration',
    'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300',
  ],
  [
    'Deprecation',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
  ],
]);*/

export const changeTypes = [
  {
    label: 'Feature',
    value: 'feature',
  },
  {
    label: 'Bug Fix',
    value: 'bug fix',
  },
  {
    label: 'Configuration',
    value: 'configuration',
  },
  {
    label: 'Deprecation',
    value: 'deprecation',
  },
];

export const statuses = [
  {
    label: 'Complete',
    value: 'complete',
    icon: IconArrowDown,
  },
  {
    label: 'In Progress',
    value: 'in progress',
    icon: IconArrowRight,
  },
  {
    label: 'Planned',
    value: 'planned',
    icon: IconArrowUp,
  },
];
