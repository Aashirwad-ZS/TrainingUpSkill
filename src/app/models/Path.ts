import { Course } from './Course';

export interface Path {
  id: number;
  pathId?: number;
  name: string;
  pathName: string;
  imageUrl: string;
  isAccessible: boolean;
  noOfCourses: number;
  progress: number;
  completedAt: null;
}

export interface PathData {
  id: number;
  name: string;
  imageUrl: string;
  about: string;
  createdBy: {
    id: number;
    name: string;
    imageUrl: string;
    email: string;
  };
  updatedAt: string;
  noOfCourses: number;
  isEnrolled: boolean;
  isCompleted: boolean;
  createdAt: string;
  courses: Course[];
}
