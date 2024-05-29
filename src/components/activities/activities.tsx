import { Fragment } from 'react';
import { Activities as ActivitiesType } from '../../models/activities.model';
import ActivityBlock from './activity-block';
import styles from './activities.module.css';
import { cn } from '../../lib/utils';
import { DAYS, MONTHS } from '../../constants';

type ActivitiesProps = {
  activities: ActivitiesType;
  selectedActivity?: string;
  onSelectActivity: (activity: string) => void;
};

export default function Activities({
  activities,
  selectedActivity,
  onSelectActivity,
}: ActivitiesProps) {
  return (
    <div
      className={cn(
        styles.activitiesContainer,
        'mt-[36px] grid grid-cols-8 gap-[8px] rounded-[24px] bg-white bg-opacity-30 py-[24px] pe-[18px] ps-[4px] text-xs',
      )}
    >
      <div />
      {DAYS.map((day) => (
        <div key={day} className="text-center uppercase">
          {day.charAt(0)}
        </div>
      ))}
      {MONTHS.map((month) => (
        <Fragment key={month}>
          <div className="text-right capitalize">{month}</div>
          {DAYS.map((day) => (
            <ActivityBlock
              key={`${month}-${day}`}
              value={activities?.results.app_opens[day][month] ?? 0}
              onClick={() => onSelectActivity(`${month}-${day}`)}
              opacity={
                !selectedActivity || selectedActivity === `${month}-${day}`
                  ? 1
                  : 0.2
              }
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
