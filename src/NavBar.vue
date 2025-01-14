<script setup>
// https://www.youtube.com/watch?v=9EjhKkFmraU
import {ref} from "vue";

const navOpen = ref(false);
</script>

<template>
  <div>
    <!-- mobile -->
    <div class="sm:hidden px-6 py-2 bg-blue-200 text-2xl text-blue-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div>
        <button @click="navOpen = !navOpen">
          <svg :class="navOpen ? 'hidden' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="2"
               stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>

          <svg :class="navOpen ? '' : 'hidden'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <nav :class="navOpen ? '' : 'hidden'" class="grid grid-rows-1">
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/teaching">教學理念</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/campus">校園資訊</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/lesson">課程介紹</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/faq">FAQ</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/join">入學專欄</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/about">關於我們</RouterLink>
        </button>
      </nav>
    </div>

    <!-- desktop -->
    <div class="hidden sm:block px-4 bg-blue-200 text-2xl text-blue-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div class="flex gap-x-6 items-center w-full">
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/teaching">教學理念</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/campus">校園資訊</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/lesson">課程介紹</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/faq">FAQ</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/join">入學專欄</RouterLink>
        </button>
        <button class="px-4 py-2">
          <RouterLink class="menuItem-active-link" to="/about">關於我們</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>