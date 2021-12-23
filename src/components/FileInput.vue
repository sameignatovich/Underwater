<template>
  <div class="form-wraper radius">
    <img v-if="previewUrl"
         :src="previewUrl"
         class="img-fluid attachment-preview fill radius" />
    <input class="attachment-input fill"
           id="formFileLg"
           type="file"
           @change="setPreviewUrl">
  </div>
</template>

<script>
export default {
  computed: {
    previewUrl() {
      return this.$store.getters.attachmentPreview;
    },
  },
  methods: {
    setPreviewUrl(event) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      this.$store.dispatch('createAttachmentPreview', fileUrl);
    },
  },
};
</script>

<style scoped lang="scss">
  .form-wraper {
    position: relative;
    height: 100%;
    width: 100%;
    border: 2px dashed #dee2e6;

    .attachment-input {
      opacity: 0;
      cursor: pointer;
    }
  }

  .radius {
    border-radius: .5rem !important;
  }

  .fill {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
  }
</style>
