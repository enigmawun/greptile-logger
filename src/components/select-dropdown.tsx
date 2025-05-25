import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectDropdown() {
  return (
    <Select>
      <SelectTrigger className='outline-dotted'>
        <SelectValue placeholder='Product' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='product'>Product</SelectItem>
        <SelectItem value='product'>Product</SelectItem>
        <SelectItem value='product'>Product</SelectItem>
        <SelectItem value='product'>Product</SelectItem>
      </SelectContent>
    </Select>
  );
}
