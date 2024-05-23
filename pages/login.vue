<script lang="ts" setup></script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-gray-900">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-extrabold mb-6 text-center text-gray-700">Welcome Back</h1>
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input
              type="email"
              id="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input
              type="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your password"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <p class="mt-6 text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-600 hover:underline font-medium">Sign up</a>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
