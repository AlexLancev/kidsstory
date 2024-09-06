interface ScheduleItem {
  id: string;
  time: string;
  subject: string;
}

interface ScheduleDay {
  day: string;
  schedule: ScheduleItem[];
}

export type scheduleGroupType = {
  groupName: string;
  scheduleData: ScheduleDay[];
};
