<template>
  <img alt="Origin logo" src="../assets/origin-logo.svg" />
  <HelloWorld msg="origin-vue-ts" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>
