<template>
<div>

</template>

<script>
export default {
  props: ['textColor', 'dividerColor'],
  data() {
    return {
      goToOptions: {
        easing: 'easeInOutCubic',
        duration: 750,
        offset: 0,
      },
      drawer: null,
      drawerActive: false,
    }
  },
}
</script>

<style lang="scss">
.v-toolbar__title {
  font-family: $heading-font-family;
}
#appbar-content.v-btn {
  transition: color 0.3s ease-in;
}
#appbar-divider {
  transition: background-color 0.3s ease-in;
  height: 1.75rem;
  margin: auto;
}
</style>
