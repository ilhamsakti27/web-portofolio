<template>
  <div class="bg-white rounded-md mt-4">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="project.imageURL" alt="thumbnail photo">

    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="text-2xl font-bold tracking-tight text-dark-greenish-gray dark:text-white">{{ project.nameProject }}</h5>
      <p class="text-slate-400 text-sm font-medium">{{ project.typeProject }}</p>
      <p class="mt-3 font-normal text-gray-600 dark:text-gray-400">{{ project.description }}</p>
      <p class="mt-1 text-gray-500 dark:text-gray-400">{{ project.techStack.join(' | ') }}</p>

      <ul class="flex space-x-4 mt-3">
        <li v-if="project.linkDocumentation.github">
          <a :href="project.linkDocumentation.github" target="_blank">
            <img class="w-6" src="@/assets/icon_github.svg" alt="link to github">
          </a>
        </li>
        <li v-if="project.linkDocumentation.instagram">
          <a :href="project.linkDocumentation.instagram" target="_blank">
            <img class="w-6" src="@/assets/icon_instagram-darkAndWhite.svg" alt="link to Instagram">
          </a>
        </li>
        <li v-if="project.linkDocumentation.deploy">
          <a :href="project.linkDocumentation.deploy" target="_blank">
            <img class="w-6" src="@/assets/icon_code-computer.svg" alt="link to website">
          </a>
        </li>
      </ul>

      <p class="mt-3 font-normal text-slate-500">{{ formattedDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      image: this.project.linkThumbnail
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.project.date);
      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>
