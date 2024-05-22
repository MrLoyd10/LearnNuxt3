<script setup>
  const route = useRoute();
  const { chapters } = useCourse();
  
  if (route.params === null || route.params === undefined || Object.keys(route.params).length === 0) {
  // Navigate to the first lesson path in the first chapter
    navigateTo(chapters[0].lessons[0].path);
  }

</script>


<template>
  <div class="bg-gray-100">

    <div class="min-h-screen flex flex-col p-12 container mx-auto">

      <div class="mb-12">
        <h1 class="text-2xl text-center">
          <span class="font-meduim">Course: </span>
          <span class="font-bold">Mastering Nuxt</span>
        </h1>
      </div>

      <div class="grow flex gap-2">

        <div class="w-3/12 bg-white p-4 rounded-md">
          <h3 class="font-bold text-xl mb-6">Chapters</h3>

          <div
            class="flex flex-col space-y-3 mb-4"
            v-for="chapter in chapters" 
            :key="chapter.slug"
          >
            <h2 class=" font-semibold mb-2">{{ chapter.title }}</h2>

            <NuxtLink 
              class="hover:text-blue-500"
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              :to="lesson.path"
              :class="{
                'text-blue-800': lesson.path === $route.fullPath,
                'text-black': lesson.path !== $route.fullPath
                }"
            >
              <span>{{ index + 1 }}.</span>
              <span>{{ lesson.title }}</span>
            </NuxtLink>
          </div>
          
        </div>

        <div class="w-9/12 bg-white p-6 rounded-md">
          <NuxtPage />
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped></style>
