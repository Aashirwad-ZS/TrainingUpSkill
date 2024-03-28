import { User } from './User';

export interface Batch {
  createdAt: string;
  createdBy: User;
  endDate: string;
  startDate: string;
  id: number;
  isAccessible: boolean;
  name: string;
  noOfPaths: number;
  noOfStudents: number;
  noOfTrainers: number;
  streamName: string;
  stream: {
    streamId: number;
    streamName: string;
  };
  progress: number;
}
