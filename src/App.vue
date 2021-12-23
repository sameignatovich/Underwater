<template>
  <div class="container">
    <div class="shadow-lg p-3 m-5 rounded">
      <div class="row">
        <div class="col-md-5">
          <rounded-block>
            <file-input />
          </rounded-block>
        </div>
        <div class="col-md-2 actions">
          <actions-block />
        </div>
        <div class="col-md-5">
          <rounded-block>
            <file-preview />
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
import ActionsBlock from '@/components/ActionsBlock.vue';
import FiltersInput from '@/components/FiltersInput.vue';

export default {
  components: {
    RoundedBlock,
    FileInput,
    FilePreview,
    ActionsBlock,
    FiltersInput,
  },
};
</script>

<style scoped lang="scss">
  .container {
    max-width: 950px;
  }
  .actions {
    margin: 3rem auto 3rem;
  }
</style>
