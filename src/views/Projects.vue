<script>
import { userData } from '@/data.js';
import CardProject  from '@/components/CardProject.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    CardProject,
    NavBar
  },
  data() {
    return {
      userData
    }
  }
}
</script>

<template>
  <div>
    <NavBar class="fixed top-0 left-0 w-full bg-light-mint"></NavBar>  
    <div class="mb-20 lg:mb-16"></div>
    <CardProject 
      v-for="project in userData.projects"
      :key="project.id"
      :project="project"
      class="mx-2 sm:mx-6 md:mx-12"
    />
  </div>
</template>

