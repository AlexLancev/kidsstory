type MenuItemsType = Array<
  Array<{
    patchName: string;
    text: string;
    name?: string;
  }>
>;

type dailyDietImagesType = {
  id: string;
  imageUrl: string;
  imagePreviewUrl: string;
};

type DailyDietType = {
  id: string;
  head: string;
  dish: string[];
};

type ActivityType = {
  id: string;
  time: string;
  activity: string;
};

interface dailyRoutineType {
  timePeriod: string;
  activities: ActivityType[];
}

type PhotoGalleryType = {
  id: number;
  image: string;
  imagePreview: string;
};

type ProgramType = {
  id: string;
  image: string;
  head: string;
  descriptions: string;
};

type ScheduleItem = {
  id: string;
  time: string;
  subject: string;
};

interface ScheduleDay {
  day: string;
  schedule: ScheduleItem[];
}

interface scheduleGroupType {
  groupName: string;
  scheduleData: ScheduleDay[];
}

type VideoGalleryType = {
  id: string;
  urlImage: string;
  urlVideo: string;
};
