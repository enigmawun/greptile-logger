import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
} from '@tabler/icons-react';

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
