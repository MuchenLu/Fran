<script setup>
import Top from './Top.vue';
</script>

<template>
  <top/>
  <div class="flex overflow-hidden flex-col pb-32 max-md:pb-24" role="main">
    <div
        class="flex flex-wrap gap-5 justify-between px-5 py-px w-full font-bold whitespace-nowrap text-slate-400 max-md:pr-5 max-md:max-w-full"
    >
    </div>
    <div
        class="flex flex-col items-start self-center mt-20 w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full px-5 "
    >
      <div
          class="flex gap-3.5  font-bold text-black whitespace-nowrap max-md:text-4xl"
      >
        <h1 class="self-start basis-auto text-3xl  border-l-8 border-blue-900  pl-2 py-1">我要入學</h1>
      </div>
      <div class="mt-8 text-2xl text-black max-md:max-w-full">
        目前學校尚未發佈任何入學簡章，敬請期待！<br/>官網發布簡章後，將詳細展示報名流程<br/>
      </div>
      <div
          class="flex flex-wrap gap-3 mt-12  font-bold text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl"
      >
        <h2 class="flex-auto self-start max-md:max-w-full text-3xl border-l-8 border-blue-900  pl-2 py-1">
          歷屆招生入學說明會影片
        </h2>
      </div>
      <div class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div
                class="flex flex-col grow  font-bold text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl"
            >
              <a href="#"
                 class="text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">113學年度-1🔗</a>
              <a href="#"
                 class="mt-9 max-md:mr-0.5 text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">112學年度-1🔗</a>
              <a href="#"
                 class="self-start mt-9 text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">111學年度🔗</a>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div
                class="flex flex-col  font-bold text-black whitespace-nowrap max-md:mt-10 text-2xl"
            >
              <a href="#"
                 class="text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">113學年度-2🔗</a>
              <a href="#"
                 class="mt-9 text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">112學年度-2🔗</a>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div
                class="flex flex-col  font-bold text-black whitespace-nowrap max-md:mt-10 text-2xl"
            >
              <a href="#"
                 class="text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">113學年度-3🔗</a>
              <a href="#"
                 class="mt-9 text-2xl hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 tabindex="0">112學年度-3🔗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnrollmentPage'
}
</script>