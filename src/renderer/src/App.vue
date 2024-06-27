<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>

    
</template>
<script setup>
const locale = zhCn
</script>