import { PropsWithChildren } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ChangeSummary } from './components/change-desc';
import { Change } from './data/schema';

interface ChangesProps extends PropsWithChildren {
  changelog: Change[];
  date: string;
}

export default function Changes({ children, changelog, date }: ChangesProps) {
  return (
    <>
      <div className='flex flex-col flex-start gap-y-4 p-4 outline-1 outline-gray-200 rounded-md'>
        <h2 className='text-2xl font-bold tracking-tight text-left'>
          Changes as of {new Date(date).toLocaleDateString()}
        </h2>
        {children}
      </div>
      <div className='flex flex-col flex-start gap-y-2 p-2 md:gap-y-4 md:p-4 outline-none text-left rounded-md'>
        {changelog.map((change) => (
          <Card key={change.id}>
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                {change.title}
              </CardTitle>
              <CardDescription>
                <ChangeSummary
                  details={change.detailed_changes}
                  type={change.type}
                  motivation={change.impact}
                  public_explanation={change.public_explanation}
                />
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
