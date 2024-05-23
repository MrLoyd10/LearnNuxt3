import courseData from "./courseData"
import type { Course, Chapter, Lesson, LessonWithPath } from '../types/course';


export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map(
    (chapter) => {
      const lessons: LessonWithPath[] = chapter.lessons.map(
        (lesson : Lesson) => ({
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
        })
      );

      return {
        ...chapter,
        lessons,
      };
    }
  );

  return {
    ...courseData,
    chapters,
  }
}


// export const useCourse = () => {
//   const newCourseData = {
//     ...courseData,
//     chapters: courseData.chapters.map((chapter) => ({
//       ...chapter,

//       lessons: chapter.lessons.map((lesson) => ({
//         ...lesson,
//         path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
//       })),
//     })),
//   }

//   return newCourseData
// }
