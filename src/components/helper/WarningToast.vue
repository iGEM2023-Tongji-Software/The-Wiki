<script setup>
const props = defineProps({
  id:String,
  title: String
})
</script>

<template>
  <div :id="props.id" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">{{props.title}}</strong>
      <small></small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>