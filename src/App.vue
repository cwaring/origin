<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
useHead({
  title: 'Origin App',
  meta: [{ name: 'description', content: 'Origin web3 starter' }]
})
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
  line-height: 1.5em;
}
</style>
