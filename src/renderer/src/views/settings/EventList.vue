<template>
    <div class="event-list">
      <div class="list">
        <div v-for="event in events" :key="event.id" class="event-item">
          <span>{{ event.title }}</span>
          <!-- Display other event properties as needed -->
        </div>
      </div>
      <EventDetails @add-event="addEventToList" />
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import EventDetails from './EventDetails.vue';
  
  export default defineComponent({
    name: 'EventList',
    components: {
      EventDetails
    },
    setup() {
      const events = ref([
        // Example events
        { id: 1, title: 'Sample Event', duration: '5_min_0_s_0_ms', cooldown: '0_min_0_s_500_ms', hotkey: 'H', icon: 'path/to/icon.png' },
        // More events can be added here
      ]);
  
      const addEventToList = (event) => {
        events.value.push(event);
      };
  
      return {
        events,
        addEventToList
      };
    }
  });
  </script>
  
  <style scoped>
  .event-list {
    display: flex;
    height: 100%;
  }
  .list {
    width: 50%;
    border-right: 1px solid #ccc;
    overflow-y: auto;
  }
  .event-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  </style>
  