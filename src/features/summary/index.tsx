import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Summary() {
  return (
    <Collapsible className='flex flex-col self-start'>
      <CollapsibleTrigger className='text-muted-foreground text-left'>
        Read more about this release.
      </CollapsibleTrigger>
      <CollapsibleContent>
        This release primarily introduces cleanup of obsolete configurations and
        documentation, dependency version rollback, and API contract
        simplification. These changes improve maintainability, remove deprecated
        features, and align documentation with the current codebase.
      </CollapsibleContent>
    </Collapsible>
  );
}
