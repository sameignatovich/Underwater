<template>
  <div class="wraper">
    <div class="centered text-center">
      <div :class="{uploading}">
        <h1><i class="bi bi-arrow-repeat"></i></h1>
      </div>
      <button @click="startUploading"
              :disabled="uploading || uploaded"
              class="btn btn-sm"
              :class="[uploaded ? 'btn-success' : 'btn-primary']">
        <span v-if="uploaded">
          Uploaded!
        </span>
        <span v-else-if="!uploading">
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
    uploading() {
      return this.$store.getters.uploading;
    },
    uploaded() {
      return this.$store.getters.uploaded;
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
