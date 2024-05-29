import { Fragment } from 'react';
import { Activities as ActivitiesType } from '../../models/activities.model';
import ActivityBlock from './activity-block';
import styles from './activities.module.css';
import { cn } from '../../lib/utils';

type ActivitiesProps = {
  activities: ActivitiesType;
};

const days = [
  {
    label: 'S',
    key: 'sunday',
  },
  {
    label: 'M',
    key: 'monday',
  },
  {
    label: 'T',
    key: 'tuesday',
  },
  {
    label: 'W',
    key: 'wednesday',
  },
  {
    label: 'T',
    key: 'thursday',
  },
  {
    label: 'F',
    key: 'friday',
  },
  {
    label: 'S',
    key: 'saturday',
  },
];

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export default function Activities({ activities }: ActivitiesProps) {
  return (
    <div
      className={cn(
        styles.activitiesContainer,
        'mt-[36px] grid grid-cols-8 gap-[8px] rounded-[24px] bg-white bg-opacity-30 py-[24px] pe-[18px] ps-[4px] text-xs',
      )}
    >
      <div />
      {days.map((day) => (
        <div key={day.key} className="text-center">
          {day.label}
        </div>
      ))}
      {months.map((month) => (
        <Fragment key={month}>
          <div className="text-right capitalize">{month}</div>
          {days.map((day) => (
            <ActivityBlock
              key={`${month}-${day.key}`}
              value={activities?.results.app_opens[day.key][month] ?? 0}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}