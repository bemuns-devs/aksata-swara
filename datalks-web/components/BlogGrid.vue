<template>
  <ContentList path="/blogs" v-slot="{ list }">
    <ul class="flex flex-col gap-2">
      <li v-for="item in list" :key="item._id">
        <BlogCard :title="item.title" :img-src="item.image" :summary="item.description" :date="new Date(item.date)"
          :url="item._path" />
      </li>
    </ul>
  </ContentList>
</template>
