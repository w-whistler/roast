import { AppOpenActivities } from './app-open-activities.model';

export type ActivitiesResults = {
  number_of_swipes: number;
  number_of_likes: number;
  number_of_no_likes: number;
  number_of_matches: number;
  number_of_no_matches: number;
  match_ratio: number;
  number_messages_sent: number;
  number_messages_received: number;
  number_of_no_conversations: number;
  number_of_dates: number;
  number_of_no_dates: number;
  number_of_sex: number;
  number_of_no_spark: number;
  number_of_relationships: number;
  longest_conversation: number;
  number_of_conversations: number;
  number_of_superlikes: number;
  number_of_messages_sent: number;
  number_of_messages_received: number;
  app_opens: AppOpenActivities;
};
