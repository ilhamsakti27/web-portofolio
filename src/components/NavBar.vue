<template>
  <nav class="px-2 sm:px-10 md:px-12">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
      <!-- GANTI HREF -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/logo.svg" class="h-8" alt="ILHAM Gallery Logo" />
      </a>
      <!-- Button for toggling navbar -->
      <button @click="toggleNavbar" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      
      <!-- Navbar items -->
      <div :class="{'block': isNavbarOpen, 'hidden': !isNavbarOpen}" class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-green-100">
          <li>
            <router-link @click.native="closeNavbar" to="/" class="block py-2 px-3 text-gray-500 rounded hover:bg-green-200 md:hover:bg-transparent md:border-0 md:hover:underline underline-offset-4 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</router-link>
          </li>
          <li>
            <router-link @click.native="closeNavbar" to="/aboutme" class="block py-2 px-3 text-gray-500 rounded hover:bg-green-200 md:hover:bg-transparent md:border-0 md:hover:underline underline-offset-4 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</router-link>
          </li>
          <li>
            <router-link @click.native="closeNavbar" to="/projects" class="block py-2 px-3 text-gray-500 rounded hover:bg-green-200 md:hover:bg-transparent md:border-0 md:hover:underline underline-offset-4 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</router-link>
          </li>
          <li>
            <router-link @click.native="closeNavbar" to="/activities" class="block py-2 px-3 text-gray-500 rounded hover:bg-green-200 md:hover:bg-transparent md:border-0 md:hover:underline underline-offset-4 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Activities</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false // State to track if navbar is open or closed
    };
  },
  methods: {
    toggleNavbar() {
      // Toggle navbar open/close
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      // Close navbar
      this.isNavbarOpen = false;
    }
  }
};
</script>

<style scoped>
/* Style for active router-link */
.router-link-active {
  color: black;
}
</style>
