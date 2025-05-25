import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { changeTypes, statuses } from '../data/data';
import { Change } from '../data/schema';
import { DataTableColumnHeader } from '@/features/changes/components/data-table-column-header';

export const columns: ColumnDef<Change>[] = [
  {
    id: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Date' />
    ),
    cell: ({ row }) => {
      const date = row.original.date;
      return date ? new Date(date).toLocaleDateString() : 'No date';
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Change' />
    ),
    cell: ({ row }) => (
      <div className='text-left'>
        <h3>{row.getValue('title')}</h3>
        <p>{row.getValue('public_explanation')}</p>
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} id='type' title='Type' />
    ),
    cell: ({ row }) => {
      const label = changeTypes.find(
        (type) => type.value === row.getValue('type')
      );
      return label ? (
        <Badge variant='outline' id={label.value} className='left'>
          {label.label}
        </Badge>
      ) : null;
    },
    enableSorting: true,
    enableHiding: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        id='status'
        key='status'
        title='Status'
      />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[100px] items-center'>
          {status.value === 'complete' && (
            <Badge variant='outline'>{status.label}</Badge>
          )}
          {status.value === 'in progress' && (
            <Badge variant='secondary'>{status.label}</Badge>
          )}
          {status.value === 'planned' && (
            <Badge variant='default'>{status.label}</Badge>
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
