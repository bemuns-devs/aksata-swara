<template>
  <ContentDoc :query="{ where: { _protected: { $ne: true } } }" :path="$route.path" />
</template>
