<script setup>
  const course = useCourse();   //Auto import na yung useCourse galing sa composables folder./////////
  const route = useRoute();     //Build in na ito sa nuxt

  const chapter = computed(() => {
    return course.chapters.find(
      (chapter) => chapter.slug === route.params.chapterSlug
    );
  });

  const lesson = computed(() => {
    return chapter.value?.lessons.find (
      (lesson) => lesson.slug === route.params.lessonSlug
    );
  });
</script>

<template>
  <div>
    <h3 class="font-bold mb-2">Lesson</h3>
    <p>This is a lesson</p>

    <p>{{ chapter?.title }}</p>
    <p>{{ lesson?.title }}</p>
  </div>
</template>

<style scoped></style>
