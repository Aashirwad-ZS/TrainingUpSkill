export interface CourseInfo {
  id: number;
  name: string;
  description: string;
  isAccessible: boolean;
  imageUrl: string;
  createdBy: {
    id: number;
    name: string;
    imageUrl: string;
    email: string;
  };
  isFavourite: boolean;
  about: string;
  isEnrolled: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  level: string;
  noOfChapters: number;
  noOfResources: number;
  noOfEnrollments: number;
  progress: number;
}
