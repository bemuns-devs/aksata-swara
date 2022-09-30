<template>
  <main>
    <ContentDoc v-slot="{doc}">
      <img :src="doc.image" :alt="doc.title">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
