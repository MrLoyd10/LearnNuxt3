<script setup>
import VideoPlayer from '~/components/VideoPlayer.vue';

const course = await useCourse(); //Auto import na yung useCourse galing sa composables folder.
const route = useRoute(); //Build in na ito sa nuxt
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);

console.log(course.value)

// Check first if its valid before render the page
definePageMeta({
  middleware: [
    async function ({ params }, ) {
      const course = await useCourse();

      const chapter = course.value.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        console.log("There is a error in chapter")
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Chapter page not found'
          })
        )
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        console.log("There is a error in lesson")
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Lesson page not found'
          })
        )
      }
    },
    'auth'
  ],
})


const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${chapter.value.title}`
})

useHead({
  title: title
})

const progress = useLocalStorage('progress', []);

const isLessonComplete = computed(() => {
	if (!progress.value[chapter.value.number - 1]) {
		return false;
	}

	if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
		return false;
	}

	return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
	if (!progress.value[chapter.value.number - 1]) {
		progress.value[chapter.value.number - 1] = [];
	}

	progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;

  //Just for debug
  console.log(`${chapter.value.number - 1} - ${lesson.value.number - 1} = ${isLessonComplete.value}`);
  console.log(progress.value);
};

</script>

<template>
  <div>
    <h3 class="font-semibold text-slate-400 uppercase mb-2">
      Lesson {{ chapter?.number }}-{{ lesson?.number }}
    </h3>
    
    <h2 class="text-lg font-semibold upp mb-2">{{ lesson?.title }}</h2>

    <div class="flex flex-col space-y-1 mb-5">
      <NuxtLink v-if="lesson?.sourceUrl"
      class=" font-normal text-sm underline text-gray-500 hover:text-gray-800"
      :to="lesson.sourceUrl"> Download URL </NuxtLink>

      <NuxtLink v-if="lesson?.downloadUrl"
      class=" font-normal text-sm underline text-gray-500 hover:text-gray-800" 
      :to="lesson.downloadUrl">
        Download Video
      </NuxtLink>
    </div>
    
    <VideoPlayer 
      v-if="lesson.videoId" 
      :video-id="lesson.videoId" 
      class="mb-2"
    />

    <p class="mb-4">{{ lesson?.text }}</p>

    
    <LessonCompleteButton  
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />

  </div>
</template>

<style>
* {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
