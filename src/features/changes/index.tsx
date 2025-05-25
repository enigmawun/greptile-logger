import { PropsWithChildren } from 'react';
import { changes } from './data/changes';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ChangeSummary } from './components/change-desc';
export default function Changes({ children }: PropsWithChildren) {
  return (
    <>
      <div className='flex flex-col flex-start gap-y-4 p-4 outline-1 outline-gray-200 rounded-md'>
        <h2 className='text-2xl font-bold tracking-tight text-left'>
          Version 2.0
        </h2>
        {children}
      </div>
      <div className='flex flex-col flex-start gap-y-4 p-4 outline-none text-left rounded-md'>
        {changes.map((change) => {
          return (
            <Card key={change.id}>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                  {change.title}
                </CardTitle>
                <CardDescription>
                  <ChangeSummary
                    details={change.detailed_changes}
                    date={change.date}
                    motivation={change.motivation}
                  />
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </>
  );
}
