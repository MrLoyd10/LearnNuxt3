<script lang="ts" setup></script>

<template>
  <div>
    <h3 class="font-bold mb-2">Lesson</h3>
    <p>This is a lesson</p>

    <p>Chapter Slug: {{ $route.params.chapterSlug }}</p>
    <p>Lesson Slug: {{ $route.params.lessonSlug }}</p>
  </div>
</template>

<style scoped></style>
