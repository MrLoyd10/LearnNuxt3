<script lang="ts" setup>
const firstLesson = useFirstLesson();
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
    <header class="flex justify-between items-center w-full py-4 bg-gray-800 text-white px-3 mb-4">
      <h1 class="text-xl font-medium">Welcome to My Nuxt 3 Homepage</h1>
      <NuxtLink
        class="text-lg bg-blue-700 hover:bg-blue-600 py-1 px-3 rounded-md"
        :to="firstLesson.path"
      >
        Login using Github
      </NuxtLink>
    </header>
    <main class="flex-grow flex md:flex-row flex-col items-center gap-x-5 p-4 mb-4">
      <section class="text-center w-full md:w-1/2 mb-6 md:mb-0">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="mb-4">
            <label for="name" class="block text-left mb-2">Name</label>
            <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg" placeholder="Your name" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-left mb-2">Email</label>
            <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg" placeholder="Your email" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-left mb-2">Message</label>
            <textarea id="message" class="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg">Send Message</button>
        </form>
      </section>
      <section class="w-full md:w-1/2 flex flex-col text-center gap-7">
        <div>
          <h2 class="text-2xl font-semibold mb-4">About Us</h2>
          <p class="max-w-md mx-auto">
            This is a brief description about the website. We provide excellent services and quality products.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4">Services</h2>
          <div class="flex lg:flex-row flex-col gap-3 justify-center">
            <div class="p-6 bg-white rounded-lg shadow-md lg:w-1/3 w-full">
              <h3 class="text-xl font-bold mb-2">Service One</h3>
              <p>
                Description of Service One.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md lg:w-1/3 w-full">
              <h3 class="text-xl font-bold mb-2">Service Two</h3>
              <p>
                Description of Service Two.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md lg:w-1/3 w-full">
              <h3 class="text-xl font-bold mb-2">Service Three</h3>
              <p>
                Description of Service Three.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="w-full py-4 bg-gray-800 text-white text-center">
      &copy; 2024 My Nuxt 3 Homepage. All rights reserved.
    </footer>
  </div>
</template>

<style scoped></style>
