export interface BatchDetails {
  id: number;
  name: string;
  stream: string;
  progress: number;
  isAuthorised?: boolean;
}

export interface EnrolledBatches {
  averageProgress: number;
  count: number;
  enrolledBatches: BatchDetails[];
}
