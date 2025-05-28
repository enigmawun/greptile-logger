import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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

const formSchema = z.object({
  search: z.string().optional(),
  filter: z.string().optional(),
});

type SearchForm = z.infer<typeof formSchema>;

interface SearchFormProps {
  handleFilterChange: (value: string, type?: string) => void;
}

export function SearchForm({ handleFilterChange }: SearchFormProps) {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
      filter: 'all',
    },
  });

  const onSubmit = (values: SearchForm) => {
    handleFilterChange(values.search || '', values.filter);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 md:space-y-4'
      >
        <div className='flex gap-2 sm:gap-4'>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Search...'
                    className='w-full min-w-20'
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      form.handleSubmit(onSubmit)();
                    }}
                    value={field.value}
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
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.handleSubmit(onSubmit)();
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Filter by type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='all'>All Types</SelectItem>
                    <SelectItem value='feature'>Features</SelectItem>
                    <SelectItem value='bug fix'>Bug Fixes</SelectItem>
                    <SelectItem value='deprecation'>Deprecations</SelectItem>
                    <SelectItem value='configuration'>Configuration</SelectItem>
                    <SelectItem value='dependency'>Dependencies</SelectItem>
                    <SelectItem value='tooling'>Tooling</SelectItem>
                    <SelectItem value='breaking'>Breaking Changes</SelectItem>
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
