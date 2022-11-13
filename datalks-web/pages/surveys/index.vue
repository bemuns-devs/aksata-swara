<template>
  <section class="py-4">
    <div class="p-4 pb-2">
      <h2 class="text-3xl text-stone-900 font-bold">
        Survey Kami
      </h2>
    </div>

    <ContentList path="/surveys" :query="{ limit: 5 }" v-slot="{ list }">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pb-8">
        <li v-for="(item, i) in list" :key="item._id" class="mx-auto">
          <SurveyCard :title="item.title" :img-src="item.image" :url="item._path"
            :period-start="new Date(item.periodStart)" :period-end="new Date(item.periodEnd)" />
        </li>
      </ul>
    </ContentList>
  </section>
</template>
