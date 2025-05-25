import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { changelogEntries, ChangelogEntry } from './data/changes';

const formSchema = z.object({
  search: z.string().optional(),
  filter: z.string().optional(),
});

type SearchForm = z.infer<typeof formSchema>;

export function SearchForm() {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
      filter: '',
    },
  });

  const onSubmit = (values: SearchForm) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex gap-4'>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Search...'
                    className='w-full'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='filter'
            render={({ field }) => (
              <FormItem className='w-[200px]'>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Filter by' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='all'>All</SelectItem>
                    <SelectItem value='feature'>Features</SelectItem>
                    <SelectItem value='configuration'>Configuration</SelectItem>
                    <SelectItem value='task'>Tasks</SelectItem>
                    <SelectItem value='deprecation'>Deprecations</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
