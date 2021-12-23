<template>
  <div class="wraper">
    <div v-if="attachmentReady" class="centered text-center">
      <div :class="{uploading}">
        <h1><i class="bi bi-arrow-repeat"></i></h1>
      </div>
      <button @click="startUploading"
              :disabled="uploading"
              class="btn btn-sm btn-primary">
        <span v-if="!uploading">
          Upload
        </span>
        <span v-else>
          Uploading...
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    attachmentReady() {
      return !!this.$store.getters.attachmentPreview;
    },
    uploading() {
      return this.$store.getters.uploading;
    },
  },
  methods: {
    startUploading() {
      this.$store.dispatch('upload');
    },
  },
};
</script>

<style scoped lang="scss">
.uploading {
  animation: linear infinite 1.5s spinny;
}

@keyframes spinny {
  to { transform: rotate(360deg); }
}
</style>
