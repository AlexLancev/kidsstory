interface ActivityType {
  id: string;
  time: string;
  activity: string;
}

export interface dailyRoutineType {
  timePeriod: string;
  activities: ActivityType[];
}
