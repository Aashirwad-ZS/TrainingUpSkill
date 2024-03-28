interface QuizResponse {
  id: number;
  name: string;
  link: string;
  status: string;
  quizType: string;
}

interface ResourceResponse {
  id: number;
  resourceName: string;
  resourceLink: string;
  isCompleted: boolean;
  isVisited: boolean;
}

export interface Chapter {
  id: number;
  name: string;
  resourceResponses: ResourceResponse[];
  quizResponses: QuizResponse[];
  progress: number;
}
