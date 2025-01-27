import courseData from "./courseData"

export const useTest = () => {
  return {
    ...courseData,
    chapters: courseData.chapters.map((chapter) => ({
      ...chapter,

      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      }))
    }))
  }
}
