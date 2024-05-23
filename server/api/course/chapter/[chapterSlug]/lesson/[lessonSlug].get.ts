import type {
  Course,
  Chapter,
  Lesson,
  LessonWithPath,
} from '~/types/course';
import course from '~/server/courseData';

course as Course;

export default defineEventHandler((event): LessonWithPath => {
    const { chapterSlug, lessonSlug } : any = event.context.params;

    const chapter: Chapter | undefined = course.chapters.find(
      (chapter) => chapter.slug === chapterSlug
    );

    if (!chapter) {
      throw createError({
        statusCode: 404,
        message: 'Chapter not found',
      });
    }

    const lesson: Lesson | undefined = chapter.lessons.find(
      (lesson: Lesson) => lesson.slug === lessonSlug
    );

    if (!lesson) {
      throw createError({
        statusCode: 404,
        message: 'Lesson not found',
      });
    }

    return {
      ...lesson,
      path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
    };
  }
);