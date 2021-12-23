<template>
  <div>
    <img :src="previewUrl"
         class="img-fluid" />
  </div>
</template>

<script>
export default {
  computed: {
    previewUrl() {
      return this.$store.getters.attachmentPreview;
    },
  },
};
</script>
