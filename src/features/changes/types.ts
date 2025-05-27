export type ChangeType =
  | 'configuration'
  | 'dependency'
  | 'tooling'
  | 'breaking'
  | 'feature'
  | 'bug fix'
  | 'deprecation';

export type ChangeStatus = 'complete' | 'in progress' | 'planned';

export interface Change {
  id: string;
  type: ChangeType;
  title: string;
  status: ChangeStatus;
  detailed_changes: string[];
  files: string[];
  repos: string[];
  impact: string;
  public_explanation: string;
  developer_explanation: string;
  contributors: string[];
}

export interface Changelog {
  date: string;
  changelog: Change[];
  summary: string;
  version: string;
}
