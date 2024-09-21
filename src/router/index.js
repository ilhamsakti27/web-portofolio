import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Projects from '@/views/Projects.vue';
import Activities from '@/views/Activities.vue';

// Definisikan rute
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutme',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
];

// Buat router dengan createRouter
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;