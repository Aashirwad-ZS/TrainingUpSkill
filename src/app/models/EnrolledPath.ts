import { Path } from './Path';

export interface EnrolledPath {
  pathId: number;
  pathName: string;
  imageUrl: string;
  noOfCourses: number;
  enrolledAt: string;
  completedAt: string | null;
  isAccessible: boolean;
  progress: number;
}

export interface EnrolledPathsData {
  averageProgress: number;
  count: number;
  enrolledPaths: Path[];
}
