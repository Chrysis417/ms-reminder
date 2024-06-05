// src/router.js

import { createRouter, createWebHashHistory } from 'vue-router';
import MainWindow from '@renderer/views/MainWindow.vue';
import SettingsWindow from '@renderer/views/SettingsWindow.vue';
import About from '@renderer/views/settings/About.vue';
import Help from '@renderer/views/settings/Help.vue';
import EventList from '@renderer/views/settings/EventList.vue';

const routes = [
  {
    path: '/',
    component: MainWindow,
  },
  {
    path: '/settings',
    component: SettingsWindow,
    children: [
      {
        path: 'event-list',
        component: EventList,
      },
      {
        path: 'settings',
        component: SettingsWindow,
      },
      {
        path: 'help',
        component: Help,
      },
      {
        path: 'about',
        component: About,
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

