import { z } from 'zod';

const changeCategorySchema = z.union([
  z.literal('feature'),
  z.literal('bug fix'),
  z.literal('configuration'),
  z.literal('deprecation'),
  z.literal('documentation'),
]);
export type changeCategory = z.infer<typeof changeCategorySchema>;

const changeStatusSchema = z.union([
  z.literal('complete'),
  z.literal('in progress'),
  z.literal('planned'),
]);
export type changeStatus = z.infer<typeof changeStatusSchema>;
const changeSchema = z.object({
  id: z.string().uuid().optional(),
  type: changeCategorySchema,
  version: z.string(),
  title: z.string(),
  date: z.date().optional(),
  status: changeStatusSchema,
  detailed_changes: z.array(z.string()).optional(),
  motivation: z.string().optional(),
  files: z.array(z.string()).optional(),
  repos: z.array(z.string()).optional(),
  public_explanation: z.string().optional(),
  developer_explanation: z.string().optional(),
  contributors: z.array(z.string()).optional(),
});
export type Change = z.infer<typeof changeSchema>;

export const changeListSchema = z.array(changeSchema);
