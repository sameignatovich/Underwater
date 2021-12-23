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
  data() {
    return {
      url: null,
    };
  },
  methods: {
    setPreviewUrl(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
  watch: {
    url(newUrl) {
      this.$emit('setPreview', newUrl);
    },
  },
};
</script>

<style lang="scss">
</style>
