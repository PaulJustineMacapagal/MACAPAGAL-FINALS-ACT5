import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from '../views/UserProfile.vue';
import UserEducation from '../views/UserEducation.vue';
import UserSkills from '../views/UserSkills.vue';

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', component: UserProfile },
  { path: '/education', component: UserEducation },
  { path: '/skills', component: UserSkills },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
