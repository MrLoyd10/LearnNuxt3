import type { LessonWithPath } from "~/types/course";

export default async (chapterSlug: string, lessonSlug: string) => {
  // Use sessionStorage to cache the lesson data
  const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`;
  const lesson = await useFetchWithCache<LessonWithPath>(url);
  return lesson;
}
