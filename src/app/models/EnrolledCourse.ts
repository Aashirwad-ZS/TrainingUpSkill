interface EnrolledCourse {
    courseId: number;
    courseName: string;
    imageUrl: string;
    createdBy: {
        id: number;
        name: string;
        imageUrl: string;
        email: string;
    };
    isFavourite: boolean;
    enrolledAt: string;
    completedAt: string | null;
    isAccessible: boolean;
    progress: number;
}

interface EnrolledCoursesData {
    averageProgress: number;
    count: number;
    enrolledCourses: EnrolledCourse[];
}
