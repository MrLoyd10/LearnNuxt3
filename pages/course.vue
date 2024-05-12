<script lang="ts" setup></script>

<template>
  <div>

    <div class="min-h-screen flex flex-col bg-gray-100 p-12">

      <div class="mb-12">
        <h1 class="text-2xl text-center">
          <span class="font-meduim">Course: </span>
          <span class="font-bold">Mastering Nuxt</span>
        </h1>
      </div>

      <div class="grow flex gap-2">

        <div class="w-3/12 bg-white p-4 rounded-md">
          <h3 class="font-bold">Chapter</h3>

        </div>

        <div class="w-9/12 bg-white p-6 rounded-md">
          
          <NuxtPage />
        
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped></style>
