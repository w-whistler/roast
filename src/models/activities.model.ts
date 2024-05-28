import { ActivitiesResults } from './activities-results.model';

export type Activities = {
  id: string;
  _cls: string;
  email_hash: string;
  year: number;
  data_upload_status: string;
  status: string;
  results: ActivitiesResults;
  created_at: number;
  updated_at: number;
};
