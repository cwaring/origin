<template>
  <router-view />
</template>

<script lang="ts" setup>
import { config } from '@/origin.config'
import { useHead } from '@vueuse/head'

// destruct config options
const { title, description, lang } = config

// https://github.com/vueuse/head
useHead({
  title,
  meta: [{ name: 'description', content: description }],
  htmlAttrs: {
    lang
  }
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
