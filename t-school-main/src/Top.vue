<script setup>
import NavBar from "./NavBar.vue";
</script>

<template>
  <nav
      class="flex z-10 w-full bg-blue-900 min-h-[16px] max-md:max-w-full"
      aria-label="Top border"
  ></nav>
  <header
      class="flex justify-center items-center gap-5 px-5 py-px w-full text-3xl font-bold whitespace-nowrap bg-white text-slate-400 max-md:px-5 max-md:max-w-full"
  >
    <RouterLink class="menuItem-active-link" to="/">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b5eba1f22bad34231547d96112db90872a3140ae1d2f895bb8688dd19a1d90?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
          alt="School Logo"
          class="object-cover grow-0 w-96 shrink-0"
      />
    </RouterLink>
    <span class="flex-1"></span>
    <a
        href="https://tschool.tp.edu.tw/nss/p/index"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 px-4 py-2 my-4 bg-white rounded-3xl border-blue-200 border-solid cursor-pointer pointer-events-auto border-[4px] text-center align-middle"
        tabindex="0"
    >官網</a
    >
  </header>

  <NavBar/>
</template>
