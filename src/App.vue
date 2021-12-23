<template>
  <div class="container">
    <div class="shadow-lg p-3 m-5 rounded">
      <div class="row gx-5">
        <div class="col">
          <rounded-block>
            <file-input @set-preview="newPreview" />
          </rounded-block>
        </div>
        <div class="col">
          <rounded-block>
            <file-preview :preview-url="previewUrl" />
          </rounded-block>
        </div>
      </div>
      <filters-input />
    </div>
  </div>
</template>

<script>
import RoundedBlock from '@/components/RoundedBlock.vue';
import FileInput from '@/components/FileInput.vue';
import FilePreview from '@/components/FilePreview.vue';
import FiltersInput from '@/components/FiltersInput.vue';

export default {
  components: {
    RoundedBlock,
    FileInput,
    FilePreview,
    FiltersInput,
  },
  data() {
    return {
      previewUrl: null,
    };
  },
  methods: {
    newPreview(previewUrl) {
      this.previewUrl = previewUrl;
    },
  },
};
</script>

<style lang="scss">

</style>
