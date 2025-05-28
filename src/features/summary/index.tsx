import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Summary({
  summary,
  version,
}: {
  summary: string;
  version: string;
}) {
  return (
    <Collapsible className='flex flex-col self-start'>
      <CollapsibleTrigger className='text-muted-foreground text-left'>
        <span className='font-bold text-blue'>Read more</span> about version{' '}
        {version}.
      </CollapsibleTrigger>
      <CollapsibleContent>{summary}</CollapsibleContent>
    </Collapsible>
  );
}
