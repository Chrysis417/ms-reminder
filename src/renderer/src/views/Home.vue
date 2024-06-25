<template>
  <!-- <IHeader v-if="routeName !== 'editor'" /> -->
  <div class="bg-white">
    <router-view v-slot="{ Component }">
      <transition name="main-fade">
        <div class="transition" :key="routeName" :data-title="routeName">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';


const routeName = ref(useRoute().name as string);

onBeforeUpdate(() => {
  routeName.value = useRoute().name as string;
});

const changeOpType = () => {
  window.ipcRenderer.send('change-op-type', 'home');
};
</script>


