import { Change } from '../data/changes';

interface ChangeTableProps extends React.ComponentProps<typeof Table> {
  details: Change['detailed_changes'];
  motivation: Change['motivation'];
  date: Date;
}
export const ChangeSummary = ({
  details,
  motivation,
  date,
}: ChangeTableProps) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <h3 className='text-lg font-semibold'>Why We Did This</h3>
      <p className='text-sm text-gray-500'>{motivation}</p>
      <h3 className='text-lg font-semibold text-gray-900'>What We Did</h3>
      <ul className='list-disc list-inside text-sm text-gray-500'>
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};
