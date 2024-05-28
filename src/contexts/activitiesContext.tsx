'use client';

import { ReactNode, createContext, useState } from 'react';
import { Activities } from '../models/activities.model';

export const ActivitiesContext = createContext<{
  activities?: Activities;
  onChangeActivities: (activities?: Activities) => void;
}>({
  onChangeActivities: () => {},
});

type ActivitiesProviderProps = {
  children: ReactNode;
};

function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const [activities, setActivities] = useState<Activities>();

  return (
    <ActivitiesContext.Provider
      value={{ activities, onChangeActivities: setActivities }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}

export default ActivitiesProvider;
