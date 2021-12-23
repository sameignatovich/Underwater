<template>
  <form>
    <label for="formFileLg" class="form-label">Large file input example</label>
    <input class="form-control form-control-lg"
           id="formFileLg"
           type="file"
           @change="setPreviewUrl">
  </form>
</template>

<script>
export default {
  methods: {
    setPreviewUrl(event) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      this.$store.dispatch('createAttachmentPreview', fileUrl);
    },
  },
};
</script>

<style lang="scss">
</style>
