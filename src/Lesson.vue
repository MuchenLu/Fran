<script setup>
import Top from './Top.vue';
</script>

<template>
  <top/>
  <div class="flex overflow-hidden flex-col pb-32 max-md:pb-24" role="main">
    <div class="flex flex-col items-start self-center mt-14 w-full max-w-[1070px] max-md:mt-10 max-md:max-w-full">
      <section aria-labelledby="credit-system-title">
        <div class="flex gap-3.5 font-bold text-black whitespace-nowrap mx-2.5">
          <h1 id="credit-system-title" class="flex-auto self-start text-3xl border-l-8 border-blue-900 pl-2 py-1">
            選課制度:學分制</h1>
        </div>
        <div class="self-center mt-12 text-2xl text-black mx-2.5">
          學分制是學生在一定學期內必須修得一定數量的學分，就可以畢業。<br/>
          ⚠在畢業前需達到分別必修28學分、選修112學分(含個別需求課程)、畢業專題6學分，在這個前提之下可以自行安排每學期的學分數(仍有上下限)，及學習的科目。<br/><br/><span
            class="font-bold text-blue-900">學生可以自己選課喔！</span><br/><br/>數位實驗高中的課程分為必修課和選修課，<br/>上課外課程可以申請學分。
        </div>
      </section>

      <section aria-labelledby="required-courses-title">
        <div class="mt-16 ml-3.5 w-full max-w-[1012px] max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-1/5">
              <div
                  class="px-5 text-4xl font-bold text-white bg-blue-200 rounded-full h-[144px] w-[144px] text-center flex items-center"
                  role="heading" aria-level="2">必修課
              </div>
            </div>
            <div class="flex flex-col w-4/5">
              <div class="self-stretch my-auto text-2xl text-black mt-3 mx-2.5">
                ► 必修課以促進社會素養及自我發掘能力為教學目標，大多為普遍高中沒有的課程。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="elective-courses-title">
        <div class="mt-8 ml-3.5 w-full max-w-[1000px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-1/5">
              <div
                  class="px-5 text-4xl font-bold text-white bg-blue-200 rounded-full h-[144px] w-[144px] text-center flex items-center"
                  role="heading" aria-level="2">選修課
              </div>
            </div>
            <div class="flex flex-col w-4/5">
              <div class="mt-3 text-2xl text-black  mx-2.5">
                ► 選修課為普遍所知的學科課程，言下之意就是學生不一定需要選修國語、英文、數學等科目，可以依照喜好或者未來升學方向自主決定。
              </div>
              <div class="mt-3 text-2xl text-black  mx-2.5">
                ► 另外選修課也包括多元選修，此類課程領域範圍非常廣，包含經濟學、網頁程式設計、腳踏車環島等等，<br/>且每學期的課程基本上不會重複，可以藉此促進學生多方探索、了解不同領域。<br/>
                ⚠️「學科選修」最少須選修3門課。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="individual-needs-title">
        <div class="mt-8 ml-3.5 w-full max-w-[999px] max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-1/5">
              <div
                  class="px-5 text-4xl font-bold text-white bg-blue-200 rounded-full h-[144px] w-[144px] text-center flex items-center"
                  role="heading" aria-level="2">個需課
              </div>
            </div>
            <div class="flex flex-col w-4/5">
              <div class="mt-7 text-2xl text-black max-md:mt-10 max-md:max-w-full mx-2.5">
                ► 個別需求課程的上課資源不只是一般的家教課，只要能夠完成申請並順利執行，就可以申請學分！
              </div>
              <div class="mt-7 text-2xl text-black max-md:mt-10 max-md:max-w-full mx-2.5">
                ►             線上課程、大學旁聽、自編教材都課以示學習資源，讓學生真正做自己學習的主人！<br/>
                ⚠️「學科選修」1人選課即開課，無選課人數上限。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="required-curriculum">
        <h2 class="flex gap-3.5 mt-12  font-bold text-black whitespace-nowrap max-md:mt-10">
          <div class="self-start basis-auto text-3xl border-l-8 border-blue-900 pl-2 py-1 mx-2.5">必修課程</div>
        </h2>
        <div class="mt-6 text-2xl text-black max-md:max-w-full  mx-2.5">
          說到必修，你想到什麼？數位實中顛覆你的想像，我們的必修不是普遍常見的學科知識，而是針對文化社會、自我發展設計的課程，這些課程使學生先深入的認識自己，再用小小的力量來影響社會、影響世界，拓展出有別於同儕的視野，並且這些技巧可用於一生，成為有能力改變社會的未來新星。
        </div>
        <img loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c62d82f7fa09c705ea996b07a771b224218fb66bacb691c428442a3b737428?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
             alt="必修課程結構圖"
             class="object-contain mt-14 w-full aspect-[2.68] max-w-[1042px] max-md:mt-10 max-md:max-w-full"/>
      </section>

      <section aria-labelledby="elective-curriculum">
        <h2 class="flex gap-3.5 mt-11  font-bold text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
          <div class="self-start basis-auto text-3xl border-l-8 border-blue-900  pl-2 py-1  mx-2.5">選修課程</div>
        </h2>
        <div class="self-center mt-7 text-2xl text-black max-md:max-w-full  mx-2.5">
          我們的選修課分為基本學科知識、多元選修課程、跨校選修課程，需要什麼，學習什麼，有效利用時間更深入學習對未來升學或是職涯有幫助的課程，帶著明確目標，朝向未來，培養出各行各業中有想法的精英人才們。
        </div>
        <img loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b2447c1d27e4af3a9a49ccaae440e5db7a4f7ee9d3d9a919cf9a7fbbd3713dd?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
             alt="選修課程結構圖"
             class="object-contain mt-14 w-full aspect-[2.1] max-w-[1042px] max-md:mt-10 max-md:max-w-full"/>
      </section>

      <section aria-labelledby="curriculum-structure">
        <h2 class="flex gap-3.5 mt-12  font-bold text-black ">
          <div class="self-start basis-auto text-3xl border-l-8 border-blue-900  pl-2 py-1  mx-2.5">課程架構圖</div>
        </h2>
        <img loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b943882a6f161119d08c9803b54be5dd612ad13f6550924716d5dd795d5bea47?placeholderIfAbsent=true&apiKey=cdcaaba3d4af4f21b10ff50183490907"
             alt="完整課程架構圖"
             class="object-contain self-end mt-9 w-full aspect-[1.08] max-w-[1042px] max-md:mr-1.5 max-md:max-w-full"/>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseSystem'
}
</script>