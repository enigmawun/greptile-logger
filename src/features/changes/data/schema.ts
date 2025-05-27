import { z } from 'zod';

const changeTypeSchema = z.union([
  z.literal('configuration'),
  z.literal('dependency'),
  z.literal('tooling'),
  z.literal('breaking'),
  z.literal('feature'),
  z.literal('bug fix'),
  z.literal('deprecation'),
]);
export type ChangeType = z.infer<typeof changeTypeSchema>;

const changeStatusSchema = z.union([
  z.literal('complete'),
  z.literal('in progress'),
  z.literal('planned'),
]);
export type ChangeStatus = z.infer<typeof changeStatusSchema>;

const changeSchema = z.object({
  id: z.string(),
  type: changeTypeSchema,
  title: z.string(),
  status: changeStatusSchema,
  detailed_changes: z.array(z.string()),
  files: z.array(z.string()),
  repos: z.array(z.string()),
  impact: z.string(),
  public_explanation: z.string(),
  developer_explanation: z.string(),
  contributors: z.array(z.string()),
});
export type Change = z.infer<typeof changeSchema>;

const changelogSchema = z.object({
  date: z.string(),
  summary: z.string(),
  version: z.string(),
  changelog: z.array(changeSchema),
});
export type Changelog = z.infer<typeof changelogSchema>;

export const changeListSchema = z.array(changeSchema);
