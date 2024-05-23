export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.chapterSlug === '1-chapter-1') {
        console.log("Chapter 1 is free");
        return;
      } 
      
      return navigateTo('/login');
})
