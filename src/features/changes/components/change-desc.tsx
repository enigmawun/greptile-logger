import { Card } from '@/components/ui/card';
import { Change } from '../types';
import { Badge } from '@/components/ui/badge';

interface ChangeTableProps extends React.ComponentProps<typeof Card> {
  details: Change['detailed_changes'];
  motivation: Change['impact'];
  type: Change['type'];
  public_explanation: Change['public_explanation'];
}
export const ChangeSummary = ({
  details,
  motivation,
  type,
  public_explanation,
}: ChangeTableProps) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <Badge variant='outline'>{type.toUpperCase()}</Badge>
      <h3 className='text-lg font-semibold text-gray-900'>What Changed</h3>
      <ul className='list-disc list-inside text-sm text-gray-500'>
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <h3 className='text-lg text-gray-900 font-semibold'>Why We Did It</h3>
      <p className='text-sm text-gray-500'>{public_explanation}</p>
      <h3 className='text-lg font-semibold text-gray-900'>Impact</h3>
      <p className='text-sm text-gray-500'>{motivation}</p>
    </div>
  );
};
