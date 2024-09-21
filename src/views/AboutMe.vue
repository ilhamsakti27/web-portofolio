<template>
  <NavBar class="fixed top-0 left-0 w-full bg-light-mint "></NavBar>
  <div class="flex flex-col-reverse lg:flex-row justify-center items-center text-center sm:px-10 md:px-12 mt-20 mb-8" id="about-div">
    <!-- about section -->
    <div class="mt-5 md:mt-2 lg:text-left md:w-10/12" id="section_about">
      <p class="font-bold text-3xl md:text-6xl text-dark-gray md:mb-5" id="title_about-me">About me</p>
      <p class="mt-1 text-gray-600" id="description_about-me1">{{ userData.summary[0] }}</p>
      <p class="mt-1 mb-10 text-gray-600" id="description_about-me2">{{ userData.summary[1] }}</p>
      <a :href="userData.linkResume" class="bg-dark-greenish-gray py-2 px-6 rounded-lg text-light-mint font-medium">Resume</a>
    </div>

    <!-- photo section -->
    <div class="flex flex-col justify-center items-center lg:justify-end">
      <img src="@/assets/photo.png" alt="my Photo" class="w-3/4" id="photo_about-me">
      <p class="font-mono text-dark-slate-blue text-lg font-bold mt-2 md:mt-4">{{ formattedJobs }}</p>
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
    formattedJobs() {
      return this.userData.jobs
        .map(job => job.toUpperCase())
        .join(' | ')
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 350px) {
  #about-div {
    margin-top: 2rem;
  }
  #section_about{
    margin-top: 0.25rem;
  }
  #description_about-me2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  #photo_about-me {
    margin-top: 2.5rem;
    width: 50%;
  }
}
</style>