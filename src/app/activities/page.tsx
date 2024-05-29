'use client';

import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ActivityBlock from '../../components/activities/activity-block';
import {
  ACTIVITY_LEVEL_ONE,
  ACTIVITY_LEVEL_THREE,
  ACTIVITY_LEVEL_TWO,
} from '../../constants';
import { ActivitiesContext } from '../../contexts/activitiesContext';
import Activities from '../../components/activities/activities';
import styles from './page.module.css';
import { cn } from '../../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../components';

export default function ActivitiesOverview() {
  const router = useRouter();
  const { activities } = useContext(ActivitiesContext);
  const [selectedActivity, setSelectedActivity] = useState<string>();
  const cardRef = useRef<HTMLDivElement>(null);

  const selectedMonth = useMemo(
    () => selectedActivity?.split('-')[0],
    [selectedActivity],
  );
  const selectedDay = useMemo(
    () => selectedActivity?.split('-')[1],
    [selectedActivity],
  );

  const selectedActivityDetails = useMemo(() => {
    if (!activities || !selectedDay || !selectedMonth) return undefined;

    return activities.results.app_opens[selectedDay]?.[selectedMonth];
  }, [activities, selectedDay, selectedMonth]);

  useEffect(() => {
    if (!activities) {
      router.replace('/');
    }
  }, [activities, router]);

  useEffect(() => {
    if (typeof selectedActivityDetails !== 'undefined' && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedActivityDetails]);

  if (!activities) {
    return null;
  }

  return (
    <div
      className={cn(
        styles.container,
        'min-h-screen flex-1 px-[30px] pb-[24px] pt-[80px]',
      )}
    >
      <h1 className="mt-[38px] text-center text-4xl">App Opened</h1>
      <Activities
        activities={activities}
        selectedActivity={selectedActivity}
        onSelectActivity={setSelectedActivity}
      />
      <div className="mt-[21px] flex items-center justify-between rounded-[82px] bg-white bg-opacity-10 px-[32px] py-[16px]">
        <div>More</div>
        <div className="flex">
          <ActivityBlock value={0} size={18} />
          <ActivityBlock
            value={ACTIVITY_LEVEL_ONE}
            size={18}
            className="ms-[12px]"
          />
          <ActivityBlock
            value={ACTIVITY_LEVEL_TWO}
            size={18}
            className="ms-[12px]"
          />
          <ActivityBlock
            value={ACTIVITY_LEVEL_THREE}
            size={18}
            className="ms-[12px]"
          />
        </div>
        <div>Less</div>
      </div>
      {typeof selectedActivityDetails !== 'undefined' && (
        <Card
          className="mt-[21px] bg-white bg-opacity-10 text-white"
          ref={cardRef}
        >
          <CardHeader>
            <CardTitle className="capitalize">
              {selectedDay} {selectedMonth}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>App open activities: {selectedActivityDetails}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
