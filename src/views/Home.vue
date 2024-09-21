<template>
  <NavBar class="fixed top-0 left-0 w-full"></NavBar>
  <div class="flex justify-center items-center text-center sm:px-10 md:px-12 h-screen">
    <div class="grid justify-items-center">
      <p class="text-2xl md:text-5xl text-slate-500">Hello, I'm</p>
      <p class="text-3xl md:text-5xl text-dark-gray font-bold md:mt-2 ">{{ capitalizedText }}</p>
      <p class="font-mono text-dark-slate-blue text-lg font-bold mt-2 md:mt-4">{{ formattedJobs }}</p>
      <p class="mt-4">{{ userData.description }}</p>

      <div class="mt-8 flex space-x-6">
        <a :href="userData.socialLinks.linkedin">
          <img src="@/assets/icon_linkedin.svg" class="w-8 h-8"/>
        </a>
        <a :href="userData.socialLinks.github">
          <img src="@/assets/icon_github.svg" class="w-8 h-8"/>
        </a>
        <a :href="userData.socialLinks.email">
          <img src="@/assets/icon_gmail.svg" class="w-8 h-8"/>
        </a>
        <a :href="userData.socialLinks.instagram">
          <img src="@/assets/icon_instagram.svg" class="w-8 h-8"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { userData } from '@/data.js';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      userData
    }
  },
  computed: {
    capitalizedText() {
      return this.userData.name.replace(/\b\w/g, char => char.toUpperCase());
    },
    formattedJobs() {
      return this.userData.jobs
        .map(job => job.toUpperCase())
        .join(' | ')
    }
  }

}
</script>

<style scoped>
/* Custom CSS here */
</style>
