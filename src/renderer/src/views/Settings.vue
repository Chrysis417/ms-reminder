<!-- src/views/SettingsWindow.vue -->

<template>
    <div class="settings-window">
      <div class="top-bar">
        <button @click="close">Close</button>
      </div>
      <div class="side-bar">
        <router-link to="/settings/event-list">Event List</router-link>
        <router-link to="/settings/settings">Settings</router-link>
        <router-link to="/settings/help">Help</router-link>
        <router-link to="/settings/about">About</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      const close = () => {
        window.ipcRenderer.send('close-settings');
      };
  
      return {
        close
      };
    }
  });
  </script>
  
  <style scoped>
  .settings-window {
    display: flex;
    height: 100vh;
  }
  .top-bar {
    display: flex;
    justify-content: flex-end;
  }
  .side-bar {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
  .content {
    flex-grow: 1;
  }
  </style>
  