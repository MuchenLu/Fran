<script setup>
import Top from './Top.vue';
</script>

<template>
  <top/>
  <div
      class="flex overflow-hidden flex-col pb-36 max-md:pb-24"
      role="main"
  >
    <div
        class="flex flex-wrap gap-5 justify-between px-5 py-px w-full whitespace-nowrap text-slate-400 max-md:pr-5 max-md:max-w-full"
    >
    </div>
    <div
        class="flex flex-col items-start self-center mt-14 w-full  text-black max-w-[1064px] max-md:mt-10 max-md:max-w-full max-md:text-4xl"
    >
      <div class="flex flex-wrap gap-3.5 whitespace-nowrap">
        <h1 class="flex-auto self-start max-md:max-w-full text-3xl font-bold border-l-8 border-blue-900  pl-2 py-1">
          數實學生常被詢問的問題
        </h1>
      </div>
      <div
          class="self-stretch mt-8 text-4xl max-md:max-w-full"
          role="region"
          aria-label="FAQ Questions and Answers"
      >
        <h2 class="text-2xl font-bold">Q: 高中畢業後怎麼升學？</h2>
        <p class="mt-4 text-2xl">
          A: 在數位實驗高中的學習過程中，不斷讓學生探索未來志向，並且學生可以依據自己的志向安排學習。若想往台灣的大學升學有 特殊選材、申請入學、分發入學三種，學校非常支持特殊選材管道，有許多針對特殊選材的課程，對於申請入學及分發入學，學校都有完善的學習資源及課程，沒有缺少資源的疑慮。包括申請國外大學，只要學生有意願學校都能幫忙，但最重要的是學生需要有為自己學系負責的能力。
        </p>

        <h2 class="mt-8 text-2xl font-bold">Q: 有校排嗎？有繁星嗎？</h2>
        <p class="mt-4 text-2xl">
          A: 因為數位實驗高中的「一生一課表」制度，每位學生所選修的課程皆不相同，無法以相同標準評比學生成績，因此沒有校排成績，也無法使用繁星管道升學。
        </p>

        <h2 class="mt-8 text-2xl font-bold">Q: 會照著課綱上課嗎？會使用課本上課嗎？</h2>
        <p class="mt-4 text-2xl">
          A: 學科選修課程的課程規劃皆為任課教師自行規劃 ，並無特殊規定是否需要按照課綱，但在課程結束一定會上完課綱內所有內容，無特殊補習加強之必要，現今狀況約一半教師使用108課綱與課本，其餘為自編課程進度，自行製作講義及撤資源。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqSection'
}
</script>