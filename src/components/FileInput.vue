<template>
  <div class="form-wraper radius">
    <h6 v-if="!previewUrl" class="display-6 centered text-center">
      <i class="bi bi-upload"></i><br/>
      Upload file
    </h6>
    <div v-else>
      <img :src="previewUrl"
           class="img-fluid attachment-preview fill radius" />
      <button @click="removeAttachment"
              class="btn btn-sm btn-danger rounded-circle btn-remove">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <input class="attachment-input fill"
           id="formFileLg"
           type="file"
           @change="setAttachment">
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
    setAttachment(event) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      this.$store.dispatch('setAttachmentUrl', fileUrl);
    },
    removeAttachment() {
      this.$store.dispatch('setAttachmentUrl', null);
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

    .btn-remove {
      position: absolute;
      top: .5rem;
      right: .5rem;
      opacity: 0.7;
      z-index: 10;
    }
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
