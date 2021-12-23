<template>
  <div>
    <img :src="previewUrl"
         class="img-fluid" />
  </div>
</template>

<script>
export default {
  props: {
    previewUrl: {
      type: String,
    },
  },
};
</script>
