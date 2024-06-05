<template>
    <div class="event-details">
      <div class="header">
        <span>Event Details</span>
        <button @click="addEvent">Add</button>
      </div>
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="event.title" type="text" />
      </div>
      <div class="form-group">
        <label>Duration:</label>
        <input type="number" v-model.number="event.durationMinutes" placeholder="min" min="0" max="999" />
        <input type="number" v-model.number="event.durationSeconds" placeholder="s" min="0" max="60" />
        <input type="number" v-model.number="event.durationMilliseconds" placeholder="ms" min="1" max="999" />
      </div>
      <div class="form-group">
        <label>Cooldown:</label>
        <input type="number" v-model.number="event.cooldownMinutes" placeholder="min" min="0" max="999" />
        <input type="number" v-model.number="event.cooldownSeconds" placeholder="s" min="0" max="60" />
        <input type="number" v-model.number="event.cooldownMilliseconds" placeholder="ms" min="1" max="999" />
      </div>
      <div class="form-group">
        <label for="hotkey">HotKey:</label>
        <input id="hotkey" v-model="event.hotkey" @focus="setHotkey" @blur="unbindHotkey" readonly />
      </div>
      <div class="form-group">
        <label for="icon">Icon:</label>
        <img :src="event.icon" alt="icon" v-if="event.icon" />
      </div>
      <div class="form-group">
        <span>Event Icon Selection</span>
        <input type="file" @change="selectLocalIcon" />
        <input v-model="iconSearchQuery" @input="searchIcons" placeholder="Search icons..." />
        <div class="icon-display">
          <!-- <img v-for="icon in filteredIcons" :src="icon.src" :alt="icon.name" @click="selectIcon(icon)" /> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, reactive, computed } from 'vue';
  
  export default defineComponent({
    name: 'EventDetails',
    setup() {
      const event = reactive({
        title: '',
        durationMinutes: 0,
        durationSeconds: 0,
        durationMilliseconds: 1,
        cooldownMinutes: 0,
        cooldownSeconds: 0,
        cooldownMilliseconds: 1,
        hotkey: '',
        icon: ''
      });
  
      const iconSearchQuery = ref('');
      const icons = ref([
        // Predefined icons in the database
        { name: 'icon1', src: 'path/to/icon1.png', keywords: ['keyword1', 'keyword2'] },
        // Add more icons here
      ]);
  
      const filteredIcons = computed(() => {
        return icons.value.filter(icon =>
          icon.keywords.some(keyword => keyword.includes(iconSearchQuery.value))
        );
      });
  
      const addEvent = () => {
        // Logic to add event to the list
        // Emit event to parent or use store action to add event
      };
  
      const setHotkey = () => {
        document.addEventListener('keydown', bindHotkey);
      };
  
      const bindHotkey = (e) => {
        if (e.key === 'Escape') {
          unbindHotkey();
        } else {
          event.hotkey = e.key;
          document.removeEventListener('keydown', bindHotkey);
        }
      };
  
      const unbindHotkey = () => {
        event.hotkey = '';
      };
  
      const selectLocalIcon = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          event.icon = e.target.result;
        };
        reader.readAsDataURL(file);
      };
  
      const searchIcons = () => {
        // Filter logic already handled in computed property
      };
  
      const selectIcon = (icon) => {
        event.icon = icon.src;
      };
  
      return {
        event,
        iconSearchQuery,
        filteredIcons,
        addEvent,
        setHotkey,
        bindHotkey,
        unbindHotkey,
        selectLocalIcon,
        searchIcons,
        selectIcon
      };
    }
  });
  </script>
  
  <style scoped>
  .event-details {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .icon-display {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    gap: 10px;
  }
  </style>
  