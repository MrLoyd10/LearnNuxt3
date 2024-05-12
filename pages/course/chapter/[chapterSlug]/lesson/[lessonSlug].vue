<script setup>
const course = useCourse(); //Auto import na yung useCourse galing sa composables folder./////////
const route = useRoute(); //Build in na ito sa nuxt

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>

<template>
  <div>
    <h3 class="font-semibold text-slate-400 uppercase mb-2">
      Lesson {{ chapter?.number }}-{{ lesson?.number }}
    </h3>
    
    <h2 class="text-lg font-semibold upp mb-2">{{ lesson?.title }}</h2>

    <div class="flex flex-col space-x-4 mb-5">
      <a v-if="lesson?.sourceUrl"
      class=" font-normal text-sm underline text-gray-500 hover:text-gray-800"
      :href="lesson.sourceUrl"> Download URL </a>

      <a v-if="lesson?.downloadUrl"
      class=" font-normal text-sm underline text-gray-500 hover:text-gray-800" 
      :href="lesson?.downloadUrl">
        Download Video
      </a>
    </div>

    <p>{{ lesson?.text }}</p>
  </div>
</template>

<style>
* {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
