'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ActivityBlock from '../../components/activities/activity-block';
import {
  ACTIVITY_LEVEL_ONE,
  ACTIVITY_LEVEL_THREE,
  ACTIVITY_LEVEL_TWO,
} from '../../constants';
import { ActivitiesContext } from '../../contexts/activitiesContext';
import Activities from '../../components/activities/activities';

export default function ActivitiesOverview() {
  const router = useRouter();
  const { activities } = useContext(ActivitiesContext);

  useEffect(() => {
    if (!activities) {
      router.replace('/');
    }
  }, [activities, router]);

  if (!activities) {
    return null;
  }

  return (
    <div className="flex-1">
      <h1 className="mt-[38px] text-center text-4xl">App Opened</h1>
      <Activities activities={activities} />
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
    </div>
  );
}
