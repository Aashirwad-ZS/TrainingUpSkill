import { User } from './User';

export interface Review {
  reviewId: number;
  postedBy: User;
  postedAt: string;
  updatedAt: string;
  deletedBy: string;
  deletedAt: string;
  rating: number;
  feedback: string;
}
