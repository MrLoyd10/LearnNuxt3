<template>
	<Nuxtlayout>
		<div class="flex justify-center items-center py-20">
			<div class="flex flex-col space-y-3">
				<div v-if="error?.statusCode === 404">
					<h1 class="font-bold text-6xl">{{ error.statusCode }}</h1>
					<p class="text-2xl">{{ error.message }}</p>
				</div>

				<div v-else>
					<h1 class="font-bold text-6xl">Oh no!</h1>
					<p class="text-2xl">It's looks like something is broke.</p>
				</div>
				
				<a 
					@click="handleError()"
					class="cursor-pointer text-blue-800"	
				>
					Go back to courses page
				</a>
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
  const error = useError();
	const firstLesson = useFirstLesson();

	const handleError = () => {
		clearError({
			redirect: firstLesson.path
		})
	}
</script>